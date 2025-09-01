import type { Profile, Project, Skill, Experience } from '../types';

export const sampleProfile: Profile = {
  headline: "Full-Stack Developer & UI/UX Enthusiast",
  slogan: "Turning ideas into elegant, scalable solutions",
  summary: "Passionate developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies, always striving to create user experiences that are both beautiful and functional.",
  currentPosition: "Senior Full-Stack Developer",
  aboutMe: "I'm a dedicated developer who believes in writing clean, maintainable code and creating intuitive user interfaces. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  quote: "The best code is no code at all, but when you must write it, make it beautiful.",
  quoteAuthor: "Anonymous Developer",
  funFacts: [
    "I can debug CSS while sleeping (almost)",
    "My first 'Hello World' was in BASIC on a Commodore 64",
    "I've contributed to 15+ open-source projects",
    "I once fixed a production bug while on vacation",
    "My code has been deployed to space (satellite software)"
  ],
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    x: "https://x.com/yourusername",
    udemy: "https://udemy.com/user/yourusername",
    youtube: "https://youtube.com/@yourusername"
  }
};

export const sampleProjects: Project[] = [
  {
    id: "1",
    projectName: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    languagesUsed: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubLink: "https://github.com/example/ecommerce",
    liveLink: "https://ecommerce-demo.com",
    thumbnail: "/project1.jpg"
  },
  {
    id: "2",
    projectName: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Firebase, and Tailwind CSS.",
    languagesUsed: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/example/taskapp",
    liveLink: "https://taskapp-demo.com",
    thumbnail: "/project2.jpg"
  },
  {
    id: "3",
    projectName: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather conditions, forecasts, and historical data. Features interactive charts, location-based weather, and responsive design.",
    languagesUsed: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    githubLink: "https://github.com/example/weather",
    liveLink: "https://weather-demo.com",
    thumbnail: "/project3.jpg"
  }
];

export const sampleSkills: Skill[] = [
  {
    id: "1",
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    id: "2",
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    id: "3",
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Jest", "Webpack"]
  },
  {
    id: "4",
    title: "Design",
    skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX", "Prototyping"]
  }
];

export const sampleExperiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of company's flagship SaaS platform serving 50K+ users",
      "Mentored 5 junior developers and conducted code reviews",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
      "Optimized database queries improving performance by 40%"
    ]
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Built MVP for fintech application from concept to production",
      "Integrated third-party APIs for payment processing and KYC",
      "Collaborated with design team to implement pixel-perfect UI",
      "Achieved 99.9% uptime for critical financial services"
    ]
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Frontend Developer",
    duration: "2018 - 2020",
    description: [
      "Developed 20+ client websites using modern web technologies",
      "Implemented responsive designs ensuring cross-browser compatibility",
      "Worked with clients to gather requirements and provide technical solutions",
      "Maintained and updated existing client websites"
    ]
  }
];
