import React from "react";
import styles from "./ProductLeaderContent.module.scss";

export default function ProductLeaderContent() {
  return (
    <div className={styles["product-leader-content"]}>
      <h2>About Me</h2>
      <p>
        I am a seasoned Product Leader with 14+ years of experience, specializing in AI, data analytics, 
        and enterprise software solutions. My background spans from transforming multi-million dollar 
        products into billion-dollar revenue generators to implementing cutting-edge AI and machine 
        learning solutions.
      </p>
      <p>
        Throughout my career, I&apos;ve led the development and launch of numerous innovative products and features. 
        At EasyPost, I spearheaded the implementation of a multi-user login account management feature, resulting in a 
        1000% increase in customer adoption and a 20% revenue boost. At the United States Postal Service, I managed 
        large-scale projects involving 400+ team members and oversaw budgets exceeding $100 million.
      </p>
      <p>
        I&apos;ve also gained valuable experience in AI training and evaluation, working with industry leaders such as 
        Amazon, Nvidia, and Google. This has sharpened my skills in implementing AI/ML capabilities, developing data 
        quality models, and creating visualizations using Python and R to provide actionable insights from complex datasets.
      </p>
      <h2>Areas of Expertise</h2>
      <p>
        Through my diverse experiences, I&apos;ve developed extensive knowledge in the following areas:
      </p>
      <ul>
        <li>Product Management: Strategic planning, roadmap development, Agile methodologies, cross-functional leadership</li>
        <li>Data Analytics: SQL, Python, R, data visualization (Tableau, Power BI), predictive modeling</li>
        <li>AI/ML: Natural Language Processing, machine learning algorithms, AI content evaluation</li>
        <li>Business Strategy: Financial analysis, market research, revenue growth strategies</li>
        <li>Leadership: Team management, stakeholder communication, mentoring, and effective collaboration across diverse cultures</li>
      </ul>
      <h2>My Mission</h2>
      <p>
        My mission is to leverage technology and data-driven insights to create innovative solutions that drive business growth and improve user experiences.
      </p>
      <p>Let&apos;s build the future of technology, one product at a time!</p>
      <h2>Contact Me</h2>
      <p>
        I am open to new opportunities in Product Leadership and AI innovation. If you&apos;d like to discuss potential collaborations or job opportunities, please connect with me on LinkedIn or email me at <a href="mailto:jamesdlee77@gmail.com">jamesdlee77@gmail.com</a>.
      </p>
    </div>
  );
}