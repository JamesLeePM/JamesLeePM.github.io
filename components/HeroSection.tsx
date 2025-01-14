import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h1 className={styles.title}>
          AI Innovation <br />
          & <br />
          Product Leadership
        </h1>
        <p className={styles.subtitle}>
          Transforming products through AI implementation and data analytics
          across logistics, fintech, and healthcare.
        </p>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.number}>40%</span>
            <span className={styles.label}>AI Models Contextual Understanding Increased</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.number}>$1B+</span>
            <span className={styles.label}>Product transformation with GenAI technologies</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.number}>75%</span>
            <span className={styles.label}>Optimized processes with customer satisfaction by 40%</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={styles.cta}
        >
          <Link href="/portfolio" className={styles.ctaButton}>
            View Portfolio <FaArrowRight className={styles.arrow} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
