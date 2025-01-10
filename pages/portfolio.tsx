import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Portfolio.module.scss";
import featuredProjects from "../components/Featured";
import pastProjects from "../components/Past";

const PortfolioPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | James Lee</title>
        <meta
          name="description"
          content="Portfolio of James Lee - Showcasing innovative projects in AI and product development."
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <motion.section
          className={styles.portfolioSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>Portfolio</h1>
          <div className={styles.content}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Current Projects</h2>
              <p className={styles.sectionDescription}>
                Ongoing initiatives where I'm actively driving innovation and
                product development.
              </p>
              <div className={styles.projectsGrid}>
                {featuredProjects.map((project) => (
                  <div key={project.id} className={styles.projectCard}>
                    <div className={styles.imageContainer}>
                      <img
                        src={project.images[0]}
                        alt={project.name}
                        className={styles.projectImage}
                        loading="eager"
                      />
                    </div>
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                      <div className={styles.technologies}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Past Projects</h2>
              <p className={styles.sectionDescription}>
                A showcase of successful projects that demonstrate my expertise
                in AI and product leadership.
              </p>
              <div className={styles.projectsGrid}>
                {pastProjects.map((project) => (
                  <div key={project.id} className={styles.projectCard}>
                    <div className={styles.imageContainer}>
                      <img
                        src={project.image}
                        alt={project.name}
                        className={styles.projectImage}
                        loading="eager"
                      />
                    </div>
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <div className={styles.roleAndTimeline}>
                        <span className={styles.role}>{project.role}</span>
                        <span className={styles.timeline}>
                          {project.timeline}
                        </span>
                      </div>
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                      <div className={styles.metrics}>
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className={styles.metric}>
                            <span className={styles.metricValue}>{value}</span>
                            <span className={styles.metricLabel}>
                              {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className={styles.technologies}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default PortfolioPage;
