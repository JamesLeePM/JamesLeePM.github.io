import React, { useState } from "react";
import { FaTrophy, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./Past";
import pastProjects from "./Past";
import styles from "./PastProjects.module.scss";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const metrics = Object.entries(project.metrics).map(([key, value]) => ({
    label: key.replace(/([A-Z])/g, " $1").toLowerCase(),
    value,
  }));

  return (
    <button
      className={styles.projectCard}
      onClick={onClick}
      type="button"
      aria-label={`View details for ${project.name}`}
    >
      <div className={styles.projectContent}>
        <div className={styles.roleAndTimeline}>
          <span className={styles.role}>{project.role}</span>
          <span className={styles.timeline}>{project.timeline}</span>
        </div>
        <h3 className={styles.projectName}>{project.name}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.metrics}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metric}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
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

        {project.learnMoreLink && (
          <a
            href={project.learnMoreLink}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </button>
  );
};

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  const metrics = Object.entries(project.metrics).map(([key, value]) => ({
    label: key.replace(/([A-Z])/g, " $1").toLowerCase(),
    value,
  }));

  return (
    <div className={styles.modalWrapper} onClick={onClose}>
      <div className={styles.modalOverlay}>
        <div
          className={styles.modalContent}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {project.image && (
            <div className={styles.modalImageContainer}>
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={600}
                className={styles.modalImage}
                priority
              />
            </div>
          )}

          <div className={styles.modalDetails}>
            <h2 className={styles.modalTitle}>{project.name}</h2>
            <div className={styles.modalRole}>
              <span className={styles.roleLabel}>{project.role}</span>
              <span className={styles.timelineLabel}>{project.timeline}</span>
            </div>

            <p className={styles.modalDescription}>{project.description}</p>

            {project.achievements && project.achievements.length > 0 && (
              <div className={styles.modalAchievements}>
                <h3>Key Achievements</h3>
                <ul>
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.recognition && project.recognition.length > 0 && (
              <div className={styles.modalRecognition}>
                <h3>Recognition</h3>
                {project.recognition.map((award, index) => (
                  <div key={index} className={styles.modalAward}>
                    <FaTrophy className={styles.trophyIcon} />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.modalTechnologies}>
              <h3>Technologies Used</h3>
              <div className={styles.techGrid}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.modalTech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {metrics.length > 0 && (
              <div className={styles.metrics}>
                {metrics.map((metric, index) => (
                  <div key={index} className={styles.metric}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PastProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        closeProjectDetails();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className={styles.pastProjects}>
      <div className={styles.projectsGrid}>
        {pastProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openProjectDetails(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeProjectDetails}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PastProjects;
