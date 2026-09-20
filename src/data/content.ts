export interface ClientSite {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlight?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  duration: string;
  description: string;
  deliveredSites: ClientSite[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
  grade: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  endorsement?: string;
  date: string;
}

export interface ContentData {
  personal: {
    name: string;
    role: string;
    targetRoles: string[];
    location: string;
    languagesSpoken: string[];
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    resumePath: string;
    photoPath: string;
    aboutPhotoPath: string;
    initials: string;
    statusBadge: string;
    intro: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  liveClientSites: ClientSite[];
  experience: ExperienceItem[];
  projects: Project[];
  skills: SkillCategory[];
  education: EducationItem[];
  certification: CertificationItem[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    ctaButtonText: string;
  };
  footer: {
    copyrightName: string;
    note: string;
  };
}

export const portfolioContent: ContentData = {
  personal: {
    name: "Aman Prajapati",
    role: "Full Stack Developer",
    targetRoles: ["Software Developer", "Full Stack Developer", "Frontend Developer"],
    location: "Mumbai, Maharashtra",
    languagesSpoken: ["English", "Hindi"],
    email: "amanprajapati9598@gmail.com",
    githubUrl: "https://github.com/amanprajapati9598",
    linkedinUrl: "https://www.linkedin.com/in/aman-prajapati-43ab56390/",
    resumePath: "./resume.pdf",
    photoPath: "./photo.jpg",
    aboutPhotoPath: "./about-photo.jpg",
    initials: "AP",
    statusBadge: "Available for full-time roles",
    intro: "BCA graduate with hands-on experience building full stack applications using JavaScript, TypeScript, Python, React and Node.js. Completed a full stack internship building live production websites and independently built an AI-powered mobile app. Looking for a first role as Software Developer, Full Stack Developer or Frontend Developer.",
  },
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  liveClientSites: [
    { name: "primecaresolutions.in", url: "https://primecaresolutions.in" },
    { name: "nilayshricreations.com", url: "https://nilayshricreations.com" },
    { name: "msdhub.in", url: "https://msdhub.in" },
    { name: "shikshaabhiyan.org", url: "https://shikshaabhiyan.org" },
  ],
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "RST Solutions",
      companyUrl: "https://rstsolutions.in",
      period: "March 2026 – September 2026",
      duration: "6 months",
      description: "Worked on 4 live client websites, handling both frontend and backend development across the full project lifecycle.",
      deliveredSites: [
        { name: "primecaresolutions.in", url: "https://primecaresolutions.in" },
        { name: "nilayshricreations.com", url: "https://nilayshricreations.com" },
        { name: "msdhub.in", url: "https://msdhub.in" },
        { name: "shikshaabhiyan.org", url: "https://shikshaabhiyan.org" },
      ],
    },
  ],
  projects: [
    {
      title: "CookSmart",
      tagline: "AI-powered food recipe recommendation mobile app",
      description: "The user enters ingredients they already have at home (for example onion, tomato, rice) and the app suggests recipes generated with AI. Frontend in Flutter, backend logic and database in PHP and MySQL. Built independently.",
      stack: ["Flutter", "PHP", "MySQL", "AI"],
      highlight: "Independently Built",
    },
    {
      title: "Sarabeth's NYC",
      tagline: "Full stack restaurant website",
      description: "Comprehensive restaurant web platform engineered with React, Node.js backend services, and MySQL database management.",
      stack: ["React", "Node.js", "MySQL"],
      liveUrl: "https://sarabeths-nyc-website.onrender.com",
    },
    {
      title: "Al-Ahmadi Restaurant",
      tagline: "Responsive restaurant website",
      description: "Fast, responsive web experience featuring structured menu presentation and interactive customer touchpoints.",
      stack: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://al-ahmadi-restaurant.onrender.com",
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "PHP"],
    },
    {
      category: "Mobile",
      skills: ["Flutter"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
    },
  ],
  education: [
    {
      degree: "BCA (Bachelor of Computer Application)",
      field: "Computer Applications",
      institution: "Tilak Maharashtra Vidyapeeth, Pune",
      period: "2023 – 2026",
      score: "CGPA 7.49 (69.81%)",
      grade: "Grade A+",
    },
  ],
  certification: [
    {
      name: "Introduction to MS Excel",
      issuer: "Simplilearn",
      endorsement: "Microsoft-endorsed",
      date: "October 2025",
    },
  ],
  contact: {
    title: "Let's connect",
    subtitle: "I am actively seeking my first role as a Software Developer, Full Stack Developer, or Frontend Developer. Whether you have an open position or would like to discuss my projects, my inbox is open.",
    email: "amanprajapati9598@gmail.com",
    ctaButtonText: "Copy Email Address",
  },
  footer: {
    copyrightName: "Aman Prajapati",
    note: "Built with React, TypeScript & Tailwind CSS",
  },
};
