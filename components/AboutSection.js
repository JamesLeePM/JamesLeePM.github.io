import React from "react";
import { AIIcon, DataAnalyticsIcon, ProductManagementIcon } from "../svg";
import { useRouter } from "next/router";

function AboutSection() {
  const router = useRouter();
return (
    <section className="section-about" id="about">
        <div className="about-header row">
            <h2 className="section-title m-b-l">About Me</h2>
            <p className="description-text m-b-l">
                With over 14 years of experience in product management, AI implementation, and data analytics, 
                I&apos;ve led transformative projects across various industries. 
                At a unicorn startup, I spearheaded the development of a multi-user login feature that increased customer adoption by 1000% 
                and boosted revenue by 20%. 
                My expertise spans from transforming multi-million dollar products into billion-dollar revenue generators 
                to implementing cutting-edge AI and machine learning technologies.
            </p>
            <button
                className="button button-secondary m-t-s m-b-xl"
                onClick={() => router.push("/about")}
            >
                Learn More
            </button>
        </div>
        <div className="about-container row">
            <Skill 
                icon={<AIIcon className="skill-icon" />} 
                title="AI & Machine Learning" 
                skills={["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Generative AI"]} 
            />
            <Skill 
                icon={<DataAnalyticsIcon className="skill-icon" />} 
                title="Data Analytics" 
                skills={["SQL", "R", "Tableau", "Power BI", "Data Visualization", "Statistical Analysis"]} 
            />
            <Skill 
                icon={<ProductManagementIcon className="skill-icon" />} 
                title="Product Management" 
                skills={["Agile Methodologies", "JIRA", "Roadmap Development", "User Story Mapping", "A/B Testing", "Next.js"]} 
            />
        </div>
    </section>
);

function Skill({ icon, title, skills }) {
return (
    <div className="skill">
        <div className="skill-icon-container">
            <a href="#" className="skill-icon-wrapper">
                {icon}
            </a>
        </div>
        <div className="details-container">
            <h3>{title}</h3>
            <ul className="skills">
                {skills.map(skill => (
                    <li key={skill} className="skill-tag skill-tag--white">{skill}</li>
                ))}
            </ul>
        </div>
    </div>
);
}
}

export default AboutSection;
