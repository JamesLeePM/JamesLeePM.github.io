import React, { useState } from "react";
import { FaTrophy, FaAward, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import pastProjects from "./Past";
import styles from "./PastProjects.module.scss";

interface Project {
  id: string;
  name: string;
  role: string;
  timeline: string;
  technologies: string[];
  metrics: {
    [key: string]: string;
  };
  image: string;
  description: string;
  achievements: string[];
  recognition?: string[];
  private?: boolean;
  highlight?: string;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => (
  <motion.div
    className={styles.projectCard}
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className={styles.imageContainer}>
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={300}
        className={styles.projectImage}
        priority
      />
      {project.highlight && (
        <div className={styles.highlight}>
          <FaAward className={styles.highlightIcon} />
          <span>{project.highlight}</span>
        </div>
      )}
    </div>
    <div className={styles.projectContent}>
      <h3 className={styles.projectName}>{project.name}</h3>
      <div className={styles.roleAndTimeline}>
        <span className={styles.role}>{project.role}</span>
        <span className={styles.timeline}>{project.timeline}</span>
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.technologies}>
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className={styles.tech}>
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className={styles.tech}>
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => (
  <motion.div
    className={styles.modalOverlay}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className={styles.modalContent}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close"
      >
        <FaTimes />
      </button>

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

      <div className={styles.modalDetails}>
        <h2 className={styles.modalTitle}>{project.name}</h2>
        <div className={styles.modalRole}>
          <span className={styles.roleLabel}>{project.role}</span>
          <span className={styles.timelineLabel}>{project.timeline}</span>
        </div>

        <p className={styles.modalDescription}>{project.description}</p>

        <div className={styles.modalAchievements}>
          <h3>Key Achievements</h3>
          <ul>
            {project.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {project.recognition && (
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

        {Object.keys(project.metrics).length > 0 && (
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
        )}
      </div>
    </motion.div>
  </motion.div>
);

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
