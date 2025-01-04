import React from "react";
import { AIIcon, DataAnalyticsIcon, ProductManagementIcon } from "../svg"; // Updated import path
import { useRouter } from "next/router";

function AboutSection() {
  const router = useRouter();
  return (
    <section className="section-about" id="about">
      <div className="about-header row">
        <h2 className="section-title m-b-l">About Me</h2>
        <p className="description-text m-b-l">
          With over 14 years of experience in product management, AI implementation, and data analytics, I've led transformative projects across various industries. At EasyPost, I spearheaded the development of a multi-user login feature that increased customer adoption by 1000% and boosted revenue by 20%. My expertise spans from transforming multi-million dollar products into billion-dollar revenue generators to implementing cutting-edge AI and machine learning technologies.
        </p>
        <button
          className="button button-secondary m-t-s m-b-xl"
          onClick={() => router.push("/about")}
        >
          Learn More
        </button>
      </div>
      <div className="about-container row">
        <div className="skill">
          <div className="skill-icon-container">
            <a href="#" className="skill-icon-wrapper">
              <AIIcon className="skill-icon" />
            </a>
          </div>
          <div className="details-container">
            <h3>AI & Machine Learning</h3>
            <ul className="skills">
              <li className="skill-tag skill-tag--white">Python</li>
              <li className="skill-tag skill-tag--white">TensorFlow</li>
              <li className="skill-tag skill-tag--white">PyTorch</li>
              <li className="skill-tag skill-tag--white">NLP</li>
              <li className="skill-tag skill-tag--white">Computer Vision</li>
              <li className="skill-tag skill-tag--white">Generative AI</li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon-container">
            <a href="#" className="skill-icon-wrapper">
              <DataAnalyticsIcon className="skill-icon" />
            </a>
          </div>
          <div className="details-container">
            <h3>Data Analytics</h3>
            <ul className="skills">
              <li className="skill-tag skill-tag--white">SQL</li>
              <li className="skill-tag skill-tag--white">R</li>
              <li className="skill-tag skill-tag--white">Tableau</li>
              <li className="skill-tag skill-tag--white">Power BI</li>
              <li className="skill-tag skill-tag--white">Data Visualization</li>
              <li className="skill-tag skill-tag--white">Statistical Analysis</li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon-container">
            <a href="#" className="skill-icon-wrapper">
              <ProductManagementIcon className="skill-icon" />
            </a>
          </div>
          <div className="details-container">
            <h3>Product Management</h3>
            <ul className="skills">
              <li className="skill-tag skill-tag--white">Agile Methodologies</li>
              <li className="skill-tag skill-tag--white">JIRA</li>
              <li className="skill-tag skill-tag--white">Roadmap Development</li>
              <li className="skill-tag skill-tag--white">User Story Mapping</li>
              <li className="skill-tag skill-tag--white">A/B Testing</li>
              <li className="skill-tag skill-tag--white">Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
