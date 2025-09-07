import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Profile, Cv_link, Project, Skill, Experience } from '../types';
import { fetchProfile, fetchcvlink, fetchProjects, fetchSkills, fetchExperiences } from '../utils/firestore';
import { sampleProfile, sampleProjects, sampleSkills, sampleExperiences } from '../data/sampleData';

interface DataContextType {
  profile: Profile | null;
  cv_link: Cv_link | null;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [cv_link, setCv_link] = useState<Cv_link | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all data from Firebase
      const [profileData, cv_linkData, projectsData, skillsData, experiencesData] = await Promise.all([
        fetchProfile(),
        fetchcvlink(),
        fetchProjects(),
        fetchSkills(),
        fetchExperiences()
      ]);

      // Set data from Firebase
      setProfile(profileData);
      setCv_link(cv_linkData);
      setProjects(projectsData || []);
      setSkills(skillsData || []);
      setExperiences(experiencesData || []);
    } catch (err) {
      console.error('❌ Error loading data from Firebase:', err);
      
      // Fallback to sample data if Firebase fails
      setProfile(sampleProfile);
      setProjects(sampleProjects);
      setSkills(sampleSkills);
      setExperiences(sampleExperiences);
      
      setError(`Failed to load data from Firebase: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const value: DataContextType = {
    profile,
    cv_link,
    projects,
    skills,
    experiences,
    loading,
    error,
    refetch: fetchAllData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
