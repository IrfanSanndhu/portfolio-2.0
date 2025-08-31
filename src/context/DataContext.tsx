import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
// import type { Profile, Project, Skill, Experience } from '../types';
// import { fetchProfile, fetchProjects, fetchSkills, fetchExperiences } from '../utils/firestore';
import { sampleProfile, sampleProjects, sampleSkills, sampleExperiences } from '../data/sampleData';

// Temporary inline types to fix export issue
interface Profile {
  headline: string;
  slogan: string;
  summary: string;
  currentPosition: string;
  aboutMe: string;
  quote: string;
  quoteAuthor: string;
  funFacts: string[];
}

interface Project {
  id: string;
  projectName: string;
  description: string;
  languagesUsed: string[];
  githubLink: string;
  liveLink: string;
  thumbnail: string;
}

interface Skill {
  id: string;
  title: string;
  skills: string[];
}

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

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
      setLoading(true);
      setError(null);
      
      // For now, use sample data. Replace with Firebase calls when ready
      // const [profileData, projectsData, skillsData, experiencesData] = await Promise.all([
      //   fetchProfile(),
      //   fetchProjects(),
      //   fetchSkills(),
      //   fetchExperiences()
      // ]);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setProfile(sampleProfile);
      setProjects(sampleProjects);
      setSkills(sampleSkills);
      setExperiences(sampleExperiences);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
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
