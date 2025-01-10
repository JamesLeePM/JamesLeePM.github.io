// components/Featured.ts

interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  link?: string; // Optional property
}

// Exporting the array of projects as a default export
const projects: Project[] = [
  {
    id: "1",
    name: "CityStake.ai - Fractional PropTech Platform",
    description: "Industry defining fractional investment platform using AI and Blockchain",
    images: ["/img/projects/CityStake-1.png","/img/projects/CityStake-2.png","/img/projects/CityStake-3.png","/img/projects/CityStake-4.png","/img/projects/CityStake-5.png","/img/projects/CityStake-6.png","/img/projects/CityStake-7.png","/img/projects/CityStake-8.png","/img/projects/CityStake-9.png","/img/projects/CityStake-10.png",],
    technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
    link: "http://citystake.ai/",
  },
  {
    id: "2",
    name: "BawsHuman - Be relentless and be resilient",
    description: "The ultimate fitness superapp designed to help you reach your peak",
    images: [ "/img/projects/BH-1.png","/img/projects/BH-2.png","/img/projects/BH-3.png","/img/projects/BH-4.png","/img/projects/BH-5.png","/img/projects/BH-6.png",],
    technologies: ["Python", "Django", "EXPO", "Swift"],
    link: "https://bawshuman.com/",
  },
];

export default projects; // Default export
