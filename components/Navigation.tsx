import React from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa"; // Example icons
import s from "./Navigation.module.scss"; // Ensure you create this file

const Navigation: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={`${s.navigation} ${className}`}>
      <ul>
        <li>
          <a href="/home" aria-label="Home">
            <FaHome /> {/* Home Icon */}
          </a>
        </li>
        <li>
          <a href="/about" aria-label="About">
            <FaUser /> {/* About Icon */}
          </a>
        </li>
        <li>
          <a href="/portfolio" aria-label="Portfolio">
            <FaBriefcase /> {/* Portfolio Icon */}
          </a>
        </li>
        <li>
          <a href="/contact" aria-label="Contact">
            <FaEnvelope /> {/* Contact Icon */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
