// components/Past.ts

interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  timeline: string;
  image: string;
  images?: string[];
  technologies: string[];
  metrics: Record<string, string>;
  achievements?: string[];
  recognition?: string[];
  highlight?: string;
  learnMoreLink?: string;
  private?: boolean;
}

const pastProjects: Project[] = [
  {
    id: "1",
    name: "AI Models Accuracy Improvement",
    role: "AI Training Lead",
    timeline: "Sept 2024 - Present",
    technologies: [
      "SFT",
      "RLHF",
      "DPO",
      "NLP",
      "LoRA",
      "GPT-4",
      "API",
      "Open source",
    ],
    metrics: {
      accuracyImprovement: "30%",
      contextualUnderstanding: "40%",
      datasetQuality: "35%",
    },
    image: "/jamesleepm.github.io/public/images/projects/AI-trainer.png",
    description:
      "Led AI-generated content enhancement initiatives using advanced training techniques, collaborating with industry leaders like Amazon, Nvidia, Google, and xAI. Implemented state-of-the-art methodologies to improve small and large language models (SLMs and LLMs) performance.",
    achievements: [
      "Increased AI content accuracy by 30% through rigorous evaluations",
      "Boosted contextual understanding by 40% using advanced NLP",
      "Improved dataset quality by 35% with comprehensive annotation strategies",
    ],
    highlight:
      "Top 5% trainer in AI models using various techniques to improve accuracy, contextual understanding, and dataset quality",
    learnMoreLink: "https://www.linkedin.com/posts/luminary-james-lee_languagemodels-llms-llm-activity-7241454296934809600-Xt8H?utm_source=share&utm_medium=member_desktop",
      private: true,
  },
  {
    id: "2",
    name: "EasyPost Multi-User Login",
    role: "Senior Technical Product Manager",
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
      customerAdoption: "rapid",
      timeToMarket: "20%",
      teamProductivity: "25%",
    },
    image: "/jamesleepm.github.io/public/images/projects/easypost.png",
    description:
      "Spearheaded the development of a multi-user login feature for EasyPost's shipping API platform, significantly improving user collaboration and security.",
    achievements: [
      "Achieved 1000% increase in customer adoption",
      "Reduced time-to-market by 20%",
      "Increased team productivity by 25%",
    ],
    highlight: "Revolutionized user management in shipping API platforms",
    learnMoreLink: "https://www.easypost.com/blog/2023-06-13-announcing-the-release-of-our-new-multi-user-login-feature",
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
    image: "/jamesleepm.github.io/public/images/projects/analytics.png",
    description:
      "Led the implementation of a self-service digital analytics platform using QlikSense, revolutionizing data-driven decision-making across USPS management levels.",
    achievements: [
      "Increased mail processing machine uptime by 50%",
      "Reduced revenue losses by 60%",
      "Enabled data-driven decision-making across management levels",
    ],
    highlight: "Transformed USPS operations through data analytics",
    learnMoreLink: "https://www.oversight.gov/sites/default/files/documents/reports/2021-08/RISC-WP-21-007.pdf",
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
    image: "/jamesleepm.github.io/public/images/projects/hero.png",
    description:
      "Led a $100M+ Integrated Human Resources System Project, modernizing HR operations through innovative solutions and strategic implementation.",
    achievements: [
      "Led $100M+ HR system modernization",
      "Implemented comprehensive HR modules",
      "Enhanced operational efficiency through digital transformation",
    ],
    highlight: "$100M+ HR transformation success",
    learnMoreLink: "https://news.usps.com/2018/07/30/our-hero/",
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
    image: "/jamesleepm.github.io/public/images/projects/uhc-epm.png",
    description:
      "Developed and launched a comprehensive health portal for USPS employees, featuring innovative health management capabilities and secure data handling.",
    achievements: [
      "Successfully launched iOS and Android health portal",
      "Featured by HIMSS in November 2014",
      "Recognized by U.S. Department of Health and Human Services, U.S. Surgeon General, and the White House",
    ],
    highlight: "Award-winning healthcare innovation",
    learnMoreLink: "https://apkpure.com/usps-health-connect-phr/com.usps.health",
    private: true,
  },
];

export default pastProjects;
export type { Project };
