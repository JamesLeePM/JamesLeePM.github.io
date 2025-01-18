"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a
          href="https://github.com/JamesLeePM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>
        <a
          href="https://linkedin.com/in/luminary-james-lee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} James Lee. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
