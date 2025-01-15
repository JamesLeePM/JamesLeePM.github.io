"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.scss";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.aboutSection}>
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.content}>
              <div className={styles.introduction}>
                <h2>Visionary Product Leader & Technology Innovator</h2>
                <p>
                  As a top-performing Product Technologist, I specialize in
                  transforming existing products and developing new ones through
                  AI implementation and emerging technologies. With experience
                  managing $100M+ budgets and leading 400+ member teams, I have
                  consistently delivered innovative solutions across fintech,
                  proptech, healthcare, and logistics sectors.
                </p>
              </div>

              <div className={styles.achievements}>
                <h2>Notable Achievements</h2>
                <div className={styles.achievementGrid}>
                  <div className={styles.achievementItem}>
                    <span className={styles.metric}>70%</span>
                    <p>
                      Cost reduction through AI agents implementation while
                      maintaining 99.99% satisfaction
                    </p>
                  </div>
                  <div className={styles.achievementItem}>
                    <span className={styles.metric}>$1B+</span>
                    <p>
                      Revenue generation through product enhancement using
                      Python and GenAI
                    </p>
                  </div>
                  <div className={styles.achievementItem}>
                    <span className={styles.metric}>400+</span>
                    <p>
                      remote team members managed and awarded by C-level
                      executives
                    </p>
                  </div>
                  <div className={styles.achievementItem}>
                    <span className={styles.metric}>Top 5%</span>
                    <p>
                      AI models trained for accuracy improvement for BigTech
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.currentVentures}>
                <h2 className={styles.sectionTitle}>
                  <FaBriefcase className={styles.icon} /> Current Ventures
                </h2>
                <div className={styles.venturesGrid}>
                  <div className={styles.ventureCard}>
                    <h3>Stealth Startup</h3>
                    <p>
                      Co-founding a blockchain-powered real estate investment
                      platform with projected 65% operating margins.
                    </p>
                  </div>
                  <div className={styles.ventureCard}>
                    <h3>BawsHuman</h3>
                    <p>
                      Joined as its first Product Manager to support launch of a
                      superapp for fitness and health.
                    </p>
                  </div>
                  <div className={styles.ventureCard}>
                    <h3>AI Training & Consulting</h3>
                    <p>
                      Leading AI trainer focused on enhancing model accuracy for
                      clients like Amazon, Google, OpenAI, and Uber.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.education}>
                <h2 className={styles.sectionTitle}>
                  <FaGraduationCap className={styles.icon} /> Education &
                  Certifications
                </h2>
                <p>
                  MBA from MIT Sloan, BS in Psychology from Penn State, with
                  certifications in Product Management (Aha!), Executive
                  Leadership (Harvard), Design Thinking (Stanford), Machine
                  Learning (Stanford), Innovation (MIT), CS50 (Harvard), and
                  Python (CodeSignal). Bilingual in English and Korean.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
