import React, { memo } from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { Project } from "./Modal";
import styles from "./Modal.module.scss";

const MetricItem = memo(
  ({ label, value }: { label: string; value: string | number }) => (
    <motion.div
      className={styles.metric}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <span className={styles.metricValue}>{String(value)}</span>
      <span className={styles.metricLabel}>
        {label.replace(/([A-Z])/g, " $1").toLowerCase()}
      </span>
    </motion.div>
  )
);

const ProjectMetrics = memo(
  ({ metrics }: { metrics: Record<string, string | number> }) => (
    <div className={styles.metrics}>
      {Object.entries(metrics).map(([key, value]) => (
        <MetricItem key={key} label={key} value={value} />
      ))}
    </div>
  )
);

const AwardItem = memo(({ award }: { award: string }) => (
  <div className={styles.award}>
    <FaTrophy className={styles.trophyIcon} />
    <span>{award}</span>
  </div>
));

const ProjectRecognition = memo(
  ({ recognition }: { recognition: string[] }) => (
    <motion.div
      className={styles.recognition}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {recognition.map((award, index) => (
        <AwardItem key={index} award={award} />
      ))}
    </motion.div>
  )
);

const TechnologyTag = memo(({ tech }: { tech: string }) => (
  <span className={styles.tech}>{tech}</span>
));

export const ProjectContent = memo(({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.3 }}
  >
    <h2 id="modal-title" className={styles.projectTitle}>
      {project.name}
    </h2>

    {project.role && project.timeline && (
      <div className={styles.roleAndTimeline}>
        <span className={styles.role}>{project.role}</span>
        <span className={styles.timeline}>{project.timeline}</span>
      </div>
    )}

    <p className={styles.projectDescription}>{project.description}</p>

    {project.metrics && <ProjectMetrics metrics={project.metrics} />}
    {project.recognition && (
      <ProjectRecognition recognition={project.recognition} />
    )}

    <motion.div
      className={styles.technologies}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {project.technologies.map((tech, index) => (
        <TechnologyTag key={index} tech={tech} />
      ))}
    </motion.div>

    {project.link && (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        View Project
      </motion.a>
    )}
  </motion.div>
));
