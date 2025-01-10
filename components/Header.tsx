import React from "react";
import Link from "next/link";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              <FaHome size={24} title="Home" />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              <FaUser size={24} title="About" />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/portfolio" className={styles.navLink}>
              <FaBriefcase size={24} title="Portfolio" />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              <FaEnvelope size={24} title="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
