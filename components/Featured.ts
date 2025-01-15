// components/Featured.ts
interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Stealth - Fractional PropTech Platform",
    description:
      "Industry defining fractional investment platform using AI and Blockchain",
    images: [
      "/jamesleepm.github.io/public/images/projects/Stealth-1.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-2.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-3.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-4.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-5.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-6.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-7.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-8.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-9.png",
      "/jamesleepm.github.io/public/images/projects/Stealth-10.png",
    ],
    technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
    link: "http://citystake.ai/",
  },
  {
    id: "2",
    name: "BawsHuman - Be relentless and Be resilient",
    description:
      "The ultimate fitness superapp designed to help you reach your peak",
    images: [
      "/jamesleepm.github.io/public/images/projects/BH-1.png",
      "/jamesleepm.github.io/public/images/projects/BH-2.png",
      "/jamesleepm.github.io/public/images/projects/BH-3.png",
      "/jamesleepm.github.io/public/images/projects/BH-4.png",
      "/jamesleepm.github.io/public/images/projects/BH-5.png",
      "/jamesleepm.github.io/public/images/projects/BH-6.png",
    ],
    technologies: ["Python", "Django", "EXPO", "Swift"],
    link: "https://bawshuman.com/",
  },
];

export default projects;
