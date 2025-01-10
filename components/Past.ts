// components/Past.ts

interface Metrics {
  accuracyImprovement?: string;
  contextualUnderstanding?: string;
  datasetQuality?: string;
  customerAdoption?: string;
  timeToMarket?: string;
  teamProductivity?: string;
  machineUptime?: string;
  revenueLossReduction?: string;
  projectValue?: string;
}

interface PastProject {
  id: string;
  name: string;
  role: string;
  timeline: string;
  technologies: string[];
  metrics: Metrics;
  image: string;
  description: string;
  achievements: string[];
  recognition?: string[];
  private: boolean;
  link?: string[];
}

const pastProjects: PastProject[] = [
  {
    id: "1",
    name: "AI Models Accuracy Improvement",
    role: "AI Training Lead",
    timeline: "Sep 2024 - Present",
    technologies: ["SFT", "RLHF", "DPO", "NLP", "LoRA", "GPT-4"],
    metrics: {
      accuracyImprovement: "30%",
      contextualUnderstanding: "40%",
      datasetQuality: "35%",
    },
    image: "./img/projects/ai-trainer.png",
    description: `Led AI-generated content enhancement initiatives using advanced training techniques, collaborating with industry leaders like Amazon, Nvidia, Google, and xAI. Implemented state-of-the-art methodologies to improve small and large language models (SLMs and LLMs) performance.`,
    achievements: [
      "Increased AI content accuracy by 30% through rigorous evaluations",
      "Boosted contextual understanding by 40% using advanced NLP",
      "Improved dataset quality by 35% with comprehensive annotation strategies",
    ],
    private: true,
    link: [
      "https://translated.com/",
      "https://appen.com/",
      "https://outlier.ai/",
      "https://alignerr.com/",
    ],
  },
  {
    id: "2",
    name: "EasyPost Multi-User Login",
    role: "Product Manager",
    timeline: "July 2022 - Oct 2023",
    technologies: [
      "Agile",
      "Scrum",
      "UI/UX",
      "Security",
      "Authorization",
      "Authentication",
      "OAuth",
      "JWT",
      "API",
    ],
    metrics: {
      customerAdoption: "1000%",
      timeToMarket: "20%",
      teamProductivity: "25%",
    },
    image: "./img/projects/easypost.png",
    description: `Spearheaded the development of a multi-user login feature for EasyPost's shipping API platform, significantly improving user collaboration and security.`,
    achievements: [
      "Achieved 1000% increase in customer adoption",
      "Reduced time-to-market by 20%",
      "Increased team productivity by 25%",
    ],
    private: true,
  },
  {
    id: "3",
    name: "USPS Digital Analytics Platform",
    role: "Digital Innovation Lead",
    timeline: "Oct 2018 - Oct 2019",
    technologies: ["QlikSense", "Data Analytics", "Business Intelligence"],
    metrics: {
      machineUptime: "50%",
      revenueLossReduction: "60%",
    },
    image: "./img/projects/analytics.png",
    description: `Led the implementation of a self-service digital analytics platform using QlikSense, revolutionizing data-driven decision-making across USPS management levels.`,
    achievements: [
      "Increased mail processing machine uptime by 50%",
      "Reduced revenue losses by 60%",
      "Enabled data-driven decision-making across management levels",
    ],
    private: true,
  },
  {
    id: "4",
    name: "HERO - Integrated HR System",
    role: "Product Lead",
    timeline: "Jan 2016 - Oct 2018",
    technologies: ["Cornerstone OnDemand", "Agile", "Scrum"],
    metrics: {
      projectValue: "$100M+",
    },
    image: "./img/projects/hero.png",
    description: `Led a $100M+ Integrated Human Resources System Project, modernizing HR operations through innovative solutions and strategic implementation.`,
    achievements: [
      "Led $100M+ HR system modernization",
      "Implemented comprehensive HR modules",
      "Enhanced operational efficiency through digital transformation",
    ],
    private: true,
  },
  {
    id: "5",
    name: "USPS Health Connect",
    role: "Technical Product Manager",
    timeline: "Dec 2013 - Jan 2016",
    technologies: [
      "iOS",
      "Android",
      "Health IT",
      "Security",
      "MongoDB",
      "Angular.JS",
      "Node.JS",
      "Swift",
      "AWS",
    ],
    metrics: {
      timeToMarket: "15 months",
      teamProductivity: "70%",
      customerAdoption: "100%",
      revenueLossReduction: "30%",
      projectValue: "$25M+",
    },
    recognition: [
      "Featured by HIMSS",
      "Recognized by U.S. Department of Health",
      "Recognized by U.S. Surgeon General",
      "Recognized by the White House",
    ],
    image: "./img/projects/uhc-epm.png",
    description: `Developed and launched a comprehensive health portal for USPS employees, featuring innovative health management capabilities and secure data handling.`,
    achievements: [
      "Successfully launched iOS and Android health portal",
      "Featured by HIMSS in November 2014",
      "Recognized by U.S. Department of Health and Human Services, U.S. Surgeon General, and the White House",
    ],
    private: true,
  },
];
export default pastProjects;
