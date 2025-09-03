/**
 * Portfolio Data Configuration
 * @author Caner Coşkun
 * @version 1.0.0
 */

import type { 
  AppConfig, 
  Project, 
  Experience, 
  Education, 
  Skill,
  PersonalInfo,
  ContactInfo
} from '@/types';

// ===== PERSONAL INFORMATION =====

export const personalInfo: PersonalInfo = {
  name: "Caner Coşkun",
  title: "Software Engineering Student",
  bio: "Dedicated Software Engineering student at Atılım University who has been making remarkable strides in the tech industry. Currently in his 4th year and expected to graduate in June 2026, this multi-talented developer brings together full-stack development expertise with over 6 years of creative video editing experience.",
  location: "Ankara, Turkey",
  status: "Available for internships and collaborations",
  graduationYear: 2026
};

export const contactInfo: ContactInfo = {
  email: "ccoskun742@gmail.com",
  linkedin: "https://www.linkedin.com/in/caner-co%C5%9Fkun/",
  github: "https://github.com/jedkx",
  medium: "https://medium.com/@ccoskun742",
  location: "Ankara, Turkey"
};

// ===== PROJECTS DATA =====

export const projects: Project[] = [
  {
    id: "full-stack-calculator",
    title: "Full-Stack Calculator with CI Pipeline",
    description: "Responsive full-stack calculator application built with .NET 8 backend and React frontend. Features comprehensive CI/CD automation pipeline for seamless deployment and testing. Demonstrates modern development practices including automated testing, code quality checks, and deployment strategies essential for enterprise development.",
    technologies: [".NET 8", "React", "CI/CD", "Git", "Automated Testing"],
    githubUrl: "https://gitlab.com/me2815443/my-project",
    liveUrl: "",
    imageUrl: "https://raw.githubusercontent.com/jedkx/full-stack-calculator/main/assets/calculator-preview.png",
    icon: "♾️",
    category: "web",
    status: "completed",
    featured: true
  },
  {
    id: "forg-game",
    title: "Forg - Interactive Game Project",
    description: "An indie game project developed using Godot Engine 4.x and GDScript, featuring pixel art assets designed with Aseprite to create a top-down survival gameplay experience. Implemented core gameplay systems including player movement, automatic weapon systems, enemy AI, and dynamic spawning mechanics using object-oriented programming approach.",
    technologies: ["Godot Engine 4.x", "GDScript", "Aseprite", "Game Development", "OOP"],
    githubUrl: "https://github.com/jedkx/forg",
    liveUrl: "",
    imageUrl: "https://raw.githubusercontent.com/jedkx/forg/main/assets/forg-gameplay-preview.png",
    icon: "🐸",
    category: "game",
    status: "in-progress",
    featured: true
  },
  {
    id: "video-portfolio",
    title: "Video Editing Portfolio - React Web App",
    description: "A modern React-based portfolio website showcasing 6+ years of professional video editing work with Ssport+ and NFcomtr. Features responsive design, interactive video galleries, and smooth animations built with React components and modern CSS. Demonstrates expertise in both creative video production and frontend web development.",
    technologies: ["React", "CSS3", "Video Production", "Responsive Design", "Animation"],
    githubUrl: "https://github.com/jedkx/Jedkx-Video-Editor-Portfolio",
    liveUrl: "https://jedkx.github.io/Jedkx-Video-Editor-Portfolio/",
    imageUrl: "https://raw.githubusercontent.com/jedkx/Jedkx-Video-Editor-Portfolio/main/assets/video-portfolio-preview.png",
    icon: "🎬",
    category: "web",
    status: "completed",
    featured: true
  }
];

// ===== EXPERIENCE DATA =====

export const experiences: Experience[] = [
  {
    id: "belsis-intern",
    role: "Software Development Intern",
    company: "Belsis",
    location: "Ankara",
    period: "Jul 2025 - Present",
    startDate: "2025-07-01",
    current: true,
    description: "Developing enterprise applications using ASP.NET, MVC, JavaScript, HTML5, Bootstrap, Kendo UI, and DevExpress Reporting. Working in agile environment with Jira for project management, contributing to technical reviews and design decisions. Gaining hands-on experience in enterprise-level development.",
    technologies: ["ASP.NET", "MVC", "JavaScript", "HTML5", "Bootstrap", "Kendo UI", "DevExpress", "Jira"],
    achievements: [
      "Contributed to enterprise application development",
      "Participated in agile development processes",
      "Gained experience in technical reviews and design decisions"
    ]
  },
  {
    id: "student-ambassador",
    role: "Student Ambassador",
    company: "Atılım University",
    location: "Ankara",
    period: "Sep 2023 - Present",
    startDate: "2023-09-01",
    current: true,
    description: "Serving as liaison between university and prospective students/parents. Conducting campus tours, providing information sessions, and facilitating communication between students and university personnel. Developing strong interpersonal and presentation skills.",
    achievements: [
      "Improved university enrollment through effective communication",
      "Developed strong presentation and interpersonal skills",
      "Successfully guided numerous prospective students"
    ]
  },
  {
    id: "video-editor",
    role: "Video Editor",
    company: "Ssport+ & NFcomtr",
    location: "Remote",
    period: "Feb 2019 - Present",
    startDate: "2019-02-01",
    current: true,
    description: "Creating engaging short-form video content with advanced color correction, grading, transitions, and special effects. Managing social media content production and maintaining consistent quality standards. 6+ years of professional creative experience across multiple platforms.",
    technologies: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Color Grading", "Motion Graphics"],
    achievements: [
      "6+ years of professional video editing experience",
      "Created engaging content for social media platforms",
      "Maintained high quality standards across all projects"
    ]
  }
];

// ===== EDUCATION DATA =====

export const education: Education[] = [
  {
    id: "atilim-university",
    degree: "Bachelor of Software Engineering",
    institution: "Atılım University",
    location: "Ankara",
    period: "Expected June 2026",
    description: "Bachelor's degree in Software Engineering with focus on full-stack development, software architecture, and modern programming methodologies. Currently in final year with strong academic performance.",
    icon: "🎓",
    type: "degree"
  },
  {
    id: "fortinet-certification",
    degree: "Fortinet Certified Fundamentals",
    institution: "Fortinet",
    location: "Online",
    period: "2024",
    description: "Professional certification in network security fundamentals, cybersecurity best practices, and Fortinet security solutions. Demonstrates commitment to cybersecurity expertise.",
    icon: "🛡️",
    type: "certification"
  },
  {
    id: "english-proficiency",
    degree: "English Proficiency - B2 Level",
    institution: "Professional Level",
    location: "Certified",
    period: "B2 Certified",
    description: "Upper-intermediate English proficiency enabling effective communication in international tech environments and collaboration with global development teams.",
    icon: "🌎",
    type: "certification"
  },
  {
    id: "adobe-creative",
    degree: "Adobe Creative Suite Expertise",
    institution: "Professional Training",
    location: "Self-Taught",
    period: "6+ Years Experience",
    description: "Extensive hands-on experience with Adobe Applications for video editing, motion graphics, and creative content production. Self-taught through professional practice and continuous learning.",
    icon: "🎨",
    type: "training"
  }
];

// ===== SKILLS DATA =====

export const skills: Skill[] = [
  // Programming Languages
  { id: "c", name: "C", category: "programming", proficiency: "advanced", years: 3 },
  { id: "cpp", name: "C++", category: "programming", proficiency: "advanced", years: 3 },
  { id: "python", name: "Python", category: "programming", proficiency: "intermediate", years: 2 },
  { id: "javascript", name: "JavaScript", category: "programming", proficiency: "advanced", years: 3 },
  { id: "html5", name: "HTML5", category: "programming", proficiency: "expert", years: 4 },
  { id: "css3", name: "CSS3", category: "programming", proficiency: "expert", years: 4 },

  // Frameworks & Libraries
  { id: "dotnet", name: ".NET", category: "framework", proficiency: "intermediate", years: 1 },
  { id: "aspnet", name: "ASP.NET", category: "framework", proficiency: "intermediate", years: 1 },
  { id: "mvc", name: "MVC", category: "framework", proficiency: "intermediate", years: 1 },
  { id: "react", name: "React", category: "framework", proficiency: "advanced", years: 2 },
  { id: "bootstrap", name: "Bootstrap", category: "framework", proficiency: "advanced", years: 2 },

  // Tools & Technologies
  { id: "git", name: "Git", category: "tool", proficiency: "advanced", years: 3 },
  { id: "docker", name: "Docker", category: "tool", proficiency: "intermediate", years: 1 },
  { id: "jira", name: "Jira", category: "tool", proficiency: "intermediate", years: 1 },
  { id: "gitlab", name: "GitLab", category: "tool", proficiency: "intermediate", years: 2 },

  // Design & Creative
  { id: "photoshop", name: "Photoshop", category: "design", proficiency: "expert", years: 6 },
  { id: "premiere", name: "Premiere Pro", category: "design", proficiency: "expert", years: 6 },
  { id: "aftereffects", name: "After Effects", category: "design", proficiency: "advanced", years: 6 },

  // Development Tools
  { id: "devexpress", name: "DevExpress", category: "tool", proficiency: "intermediate", years: 1 },
  { id: "kendoui", name: "Kendo UI", category: "framework", proficiency: "intermediate", years: 1 },

  // Methodologies
  { id: "agile", name: "Agile Methodology", category: "other", proficiency: "intermediate", years: 1 }
];

// ===== APP CONFIGURATION =====

export const appConfig: AppConfig = {
  siteName: "Developer Daily - Caner Coşkun Portfolio",
  siteDescription: "Vintage newspaper-themed portfolio website for Caner Coşkun - Software Engineering Student at Atılım University",
  author: personalInfo,
  contact: contactInfo,
  social: {
    github: "https://github.com/jedkx",
    linkedin: "https://www.linkedin.com/in/caner-co%C5%9Fkun/",
    email: "ccoskun742@gmail.com",
    medium: "https://medium.com/@ccoskun742"
  }
};

// ===== NEWSPAPER CONTENT =====

export const newspaperContent = {
  masthead: {
    volume: "VOL. 1 - NO. 1",
    date: "SATURDAY, MARCH 27, 2004 | Fair 18°C",
    edition: "FIRST DIGITAL EDITION",
    title: "DEVELOPER DAILY",
    subtitle: "The Professional Tech Chronicle - Ankara Edition",
    index: "INSIDE: About p.1, Skills p.1, Experience p.1, Projects p.1, Education p.1, Contact p.1"
  },
  
  breakingNews: {
    label: "BREAKING NEWS",
    headline: "SOFTWARE ENGINEERING STUDENT MAKES WAVES IN TECH INDUSTRY",
    subtitle: "Multi-talented Developer Combines Full-Stack Skills with Creative Vision",
    dateline: "Ankara Bureau | Student Spotlight"
  },

  briefUpdates: [
    {
      headline: "React 19 Release Notes",
      text: "Latest framework updates bring enhanced performance optimizations."
    },
    {
      headline: "TypeScript Adoption Rises",
      text: "Industry surveys show 85% of developers now prefer strongly typed JavaScript."
    },
    {
      headline: "Remote Work Continues",
      text: "Tech companies maintain flexible policies post-pandemic era."
    },
    {
      headline: "AI Integration Growing",
      text: "Development tools increasingly incorporate artificial intelligence assistance."
    }
  ],

  advertisement: {
    header: "ADVERTISEMENT",
    content: "Professional Services Available\nWeb Development\nUI/UX Design\nConsultation\nContact for rates"
  },

  footer: {
    publisher: "DEVELOPER DAILY - Published by C. COŞKUN ENTERPRISES",
    copyright: "© Caner Coşkun 2025 | All Rights Reserved | Printed in Ankara, Turkey",
    edition: "First Edition | Volume 1, Number 1 | Initial Commit 2025"
  }
};
