import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Profile, Project, Skill, Experience } from '../types';

// Fetch profile data
export const fetchProfile = async (): Promise<Profile | null> => {
  try {
    const profileDoc = doc(db, 'profile', 'profile');
    const profileSnap = await getDoc(profileDoc);
    
    if (profileSnap.exists()) {
      return profileSnap.data() as Profile;
    }
    return null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

// Fetch all projects
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const projectsQuery = query(collection(db, 'projects'), orderBy('projectName'));
    const querySnapshot = await getDocs(projectsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Fetch all skills
export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const skillsQuery = query(collection(db, 'skills'), orderBy('title'));
    const querySnapshot = await getDocs(skillsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Skill[];
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

// Fetch all experiences
export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const experiencesQuery = query(collection(db, 'experiences'), orderBy('company'));
    const querySnapshot = await getDocs(experiencesQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Experience[];
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
};
