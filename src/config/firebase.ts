import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase config - replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyCJx15gdPGPggTz6ZyIM0VqhhdP3F3Ko_Q",
  authDomain: "irfan-portfolio-e687d.firebaseapp.com",
  projectId: "irfan-portfolio-e687d",
  storageBucket: "irfan-portfolio-e687d.firebasestorage.app",
  messagingSenderId: "342965118649",
  appId: "1:342965118649:web:546363b59df272dc9cdd68",
  measurementId: "G-EEP9Y6HL04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
