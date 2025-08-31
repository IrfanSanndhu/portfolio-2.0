export interface Profile {
  headline: string;
  slogan: string;
  summary: string;
  currentPosition: string;
  aboutMe: string;
  quote: string;
  quoteAuthor: string;
  funFacts: string[];
}

export interface Project {
  id: string;
  projectName: string;
  description: string;
  languagesUsed: string[];
  githubLink: string;
  liveLink: string;
  thumbnail: string;
}

export interface Skill {
  id: string;
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}
