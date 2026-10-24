export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  badge?: string;
  technologies: string[];
  description: string;
  features: string[];
  highlights: string[];
  codeSnippets?: { label: string; code: string; lang: string }[];
  liveUrl?: string;
  githubUrl?: string;
  theme: 'newspaper' | 'blueprint' | 'notebook';
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  score?: string;
  details?: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  items: { name: string; tag?: string; highlight?: boolean }[];
}

export interface Achievement {
  number: string;
  label: string;
  sublabel: string;
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: "Bhavesh Kumawat",
  firstName: "BHAVESH",
  lastName: "KUMAWAT",
  role: "Frontend Developer",
  tagline: "Computer Science undergraduate building things for the web.",
  email: "bhavesh.kmwt.tech@gmail.com",
  phone: "+91 8441856457",
  location: "Rajsamand, Rajasthan, India",
  linkedin: "https://www.linkedin.com/in/bhavesh-kumawat-13b191376/",
  github: "https://github.com/bhavesh-013",
  aboutBio: "Computer Science undergraduate with knowledge of full-stack development, object-oriented programming, and databases. Enthusiastic about learning new technologies and building real-world software solutions.",
  aboutPoints: [
    "Computer Science student @ PW Institute of Innovation",
    "Frontend Developer focused on modern JS & CSS",
    "Builder who turns complex requirements into intuitive UIs",
    "Problem solver with 200+ DSA challenges solved",
    "Always learning & adding new tools to the toolbox"
  ],
  editorialPills: [
    "01 / FRONTEND",
    "02 / JAVASCRIPT",
    "03 / UI & UX",
    "04 / PROBLEM SOLVING"
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: "2025 — 2029 (Expected)",
    degree: "B.Tech in Computer Science",
    institution: "PW Institute of Innovation",
    score: "8.5 CGPA",
    details: "Focusing on Full-Stack Development, Data Structures, Algorithms, and Object Oriented Programming.",
    tag: "CURRENT DEGREE"
  },
  {
    period: "2023 — 2024",
    degree: "12th (Senior Secondary)",
    institution: "Gayatri Public Sr. Sec. School (RBSE)",
    details: "Science Stream — Physics, Chemistry & Mathematics foundation.",
    tag: "HIGHER SECONDARY"
  },
  {
    period: "2021 — 2022",
    degree: "10th (Secondary)",
    institution: "Gayatri Public Sr. Sec. School (RBSE)",
    details: "General Academics & Mathematics.",
    tag: "SECONDARY"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES",
    color: "#84B067",
    items: [
      { name: "JavaScript ES6+", highlight: true, tag: "Primary" },
      { name: "C++", highlight: true, tag: "DSA" },
      { name: "C", tag: "Core" },
      { name: "Java", tag: "OOPs" }
    ]
  },
  {
    title: "WEB & FRONTEND",
    color: "#D97706",
    items: [
      { name: "HTML5", highlight: true },
      { name: "CSS3", highlight: true },
      { name: "Flexbox & Grid", highlight: true },
      { name: "Tailwind CSS" },
      { name: "Responsive Layouts" },
      { name: "Fetch API & Async/Await" }
    ]
  },
  {
    title: "DATABASES",
    color: "#2563EB",
    items: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "MongoDB" },
      { name: "Relational Schemas" }
    ]
  },
  {
    title: "TOOLS & DEPLOYMENT",
    color: "#9333EA",
    items: [
      { name: "Git", highlight: true },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Netlify", highlight: true }
    ]
  },
  {
    title: "CORE CONCEPTS",
    color: "#059669",
    items: [
      { name: "OOPs", highlight: true },
      { name: "DSA", highlight: true },
      { name: "DBMS", highlight: true }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "insight-bharat",
    number: "01",
    title: "INSIGHT BHARAT",
    category: "Premium News Application",
    subtitle: "Editorial news aggregation platform with resilient proxies and zero layout shift",
    badge: "LIVE",
    theme: "newspaper",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "NewsAPI",
      "LocalStorage",
      "Netlify"
    ],
    description: "Built a responsive editorial-style news platform integrating NewsAPI via Fetch API, delivering real-time news across 5+ categories with async/await and JSON parsing.",
    features: [
      "Dark mode theme toggle with persistent state",
      "Personalized bookmarking system saved in LocalStorage",
      "Dynamic keyword search with real-time client filter",
      "LocalStorage caching mechanism reducing redundant network roundtrips",
      "Multi-proxy CORS strategy with 3+ fallback endpoints for 99.9% uptime",
      "Graceful error handling & skeleton loader states"
    ],
    highlights: [
      "~35% faster load time through smart caching",
      "Resilient Multi-Proxy Fallback Pipeline"
    ],
    liveUrl: "https://insight-bharat.netlify.app/",
    githubUrl: "https://github.com/bhavesh-013/insight-bharat-news"
  },
  {
    id: "securra",
    number: "02",
    title: "SECURRA",
    category: "Smart Home IoT Dashboard",
    subtitle: "Real-time control station for lights, temperature sensors, and security locks",
    badge: "LIVE",
    theme: "blueprint",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage",
      "Git",
      "Netlify"
    ],
    description: "Developed an IoT-style smart home dashboard with real-time device controls (lights, temperature, security) and dynamic status panels.",
    features: [
      "Interactive status toggles for room lights & appliances",
      "Temperature & climate control with live feedback gauge",
      "Security system arm/disarm status board",
      "Modular state management engine (saveState/loadState)",
      "Persistent configurations saved across browser reloads",
      "Continuous Deployment via Git CI/CD on Netlify"
    ],
    highlights: [
      "Persistent State Engine (saveState / loadState)",
      "Dynamic Reactive Status Panels"
    ],

    liveUrl: "http://securra-digitalboard.netlify.app",
    githubUrl: "https://github.com/bhavesh-013/home-dash"
  },
  {
    id: "grocery-dbms",
    number: "03",
    title: "GROCERY MANAGEMENT SYSTEM",
    category: "DBMS Capstone Project",
    subtitle: "Normalized multi-relational database architecture for retail inventory & billing",
    badge: "DATABASE ARCHITECTURE",
    theme: "notebook",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "SQL",
      "ER Diagrams",
      "Chen Notation"
    ],
    description: "Designed a normalized relational schema with 10+ tables and 134+ records, implementing complex relational constraints, automated views, and audit triggers.",
    features: [
      "10+ Normalized Relational Tables (BCNF / 3NF compliance)",
      "134+ Pre-seeded authentic inventory & customer transaction records",
      "Automated SQL Views for daily sales analytics & low-stock alerts",
      "Optimized B-Tree Indexes for fast query execution",
      "Audit Triggers for automated stock decrement upon checkout",
      "Stored Procedures for multi-item invoice generation"
    ],
    highlights: [
      "10+ Tables, 134+ Records",
      "Chen Notation ER Blueprint"
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    number: "100+",
    label: "LeetCode Problems",
    sublabel: "Data Structures & Algorithms in C++ & Java"
  },
  {
    number: "100+",
    label: "GeeksforGeeks Solved",
    sublabel: "Core logic, arrays, strings & recursion"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Web Development Certification",
    organization: "IBM Skills Network",
    year: "2026"
  },
  {
    title: "CSS Certification",
    organization: "HackerRank",
    year: "2026"
  },
  {
    title: "Hackathon Participant",
    organization: "RIFT Hackathon",
    year: "2026"
  }
];

export const CURRENTLY_EXPLORING = [
  "Learning by building.",
  "Exploring better ways to build for the web.",
  "Always adding another tool to the toolbox."
];
