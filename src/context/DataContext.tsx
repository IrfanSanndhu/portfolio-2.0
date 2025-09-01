import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Profile, Project, Skill, Experience } from '../types';
import { fetchProfile, fetchProjects, fetchSkills, fetchExperiences } from '../utils/firestore';
import { sampleProfile, sampleProjects, sampleSkills, sampleExperiences } from '../data/sampleData';

interface DataContextType {
  profile: Profile | null;
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    try {
      console.log('🔄 Starting to fetch data from Firebase...');
      setLoading(true);
      setError(null);

      // Fetch all data from Firebase
      const [profileData, projectsData, skillsData, experiencesData] = await Promise.all([
        fetchProfile(),
        fetchProjects(),
        fetchSkills(),
        fetchExperiences()
      ]);

      console.log('📊 Firebase data received:', {
        profile: profileData,
        projects: projectsData?.length || 0,
        skills: skillsData?.length || 0,
        experiences: experiencesData?.length || 0
      });

      // Set data from Firebase
      setProfile(profileData);
      setProjects(projectsData || []);
      setSkills(skillsData || []);
      setExperiences(experiencesData || []);

      console.log('✅ Firebase data loaded successfully!');
    } catch (err) {
      console.error('❌ Error loading data from Firebase:', err);
      
      // Fallback to sample data if Firebase fails
      console.log('🔄 Falling back to sample data...');
      console.log('📋 Sample profile data:', sampleProfile);
      
      setProfile(sampleProfile);
      setProjects(sampleProjects);
      setSkills(sampleSkills);
      setExperiences(sampleExperiences);
      
      console.log('✅ Sample data loaded successfully!');
      
      setError(`Failed to load data from Firebase: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
      console.log('🏁 Data loading completed. Loading:', false);
      console.log('📊 Final profile state:', profile);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const value: DataContextType = {
    profile,
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
