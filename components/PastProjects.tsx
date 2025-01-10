import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import pastProjects from "./Past";
import Modal from "./Modal";
import styles from "./PastProjects.module.scss";

const PastProjects: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={styles.pastProjects}>
      <div className={styles.projectsGrid}>
        {pastProjects.map((project) => (
          <article
            key={project.id}
            className={styles.projectCard}
            onClick={() => openModal(project)}
          >
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <div className={styles.roleAndTimeline}>
                <span className={styles.role}>{project.role}</span>
                <span className={styles.timeline}>{project.timeline}</span>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>

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

              {project.recognition && (
                <div className={styles.recognition}>
                  {project.recognition.map((award, index) => (
                    <div key={index} className={styles.award}>
                      <FaTrophy className={styles.trophyIcon} />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default PastProjects;
