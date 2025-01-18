"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Head from "next/head";
import styles from "../styles/Contact.module.scss";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact - James Lee | Product Technologist</title>
        <meta
          name="description"
          content="Get in touch with James Lee, a Product Technologist specializing in AI implementation and emerging technologies."
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.contactSection}>
            <motion.div
              style={{ width: "100%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={styles.title}>Get in Touch</h1>
              <div className={styles.content}>
                <p className={styles.description}>
                  I'm always interested in hearing about new opportunities and
                  innovative projects. Let's connect!
                </p>
                <div className={styles.contactInfo}>
                  <div className={styles.emailSection}>
                    <h2 className={styles.sectionTitle}>Email</h2>
                    <div className={styles.emailAddress}>
                      jamesdlee77<span className={styles.at}>@</span>gmail
                      <span className={styles.dot}>.</span>com
                    </div>
                  </div>
                  <div className={styles.socialLinks}>
                    <h2 className={styles.sectionTitle}>Connect</h2>
                    <div className={styles.links}>
                      <a
                        href="https://github.com/JamesLeePM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/luminary-james-lee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        <FaLinkedin /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
