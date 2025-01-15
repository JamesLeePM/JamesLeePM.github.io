"use client";

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../styles/Portfolio.module.scss";
import featuredProjects from "../components/Featured";
import pastProjects, { Project } from "../components/Past";

const PortfolioPage: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.portfolioSection}>
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.title}>Portfolio</h1>
            <div className={styles.content}>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Current Projects</h2>
                <p className={styles.sectionDescription}>
                  Ongoing initiatives where I'm actively driving innovation and
                  product development.
                </p>
                <div className={styles.projectsContainer}>
                  {featuredProjects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                      <div className={styles.carouselContainer}>
                        <div className={styles.iphoneContainer}>
                          <Slider {...sliderSettings}>
                            {project.images.map((image, index) => (
                              <div key={index} className={styles.carouselItem}>
                                <div
                                  className={styles.imageWrapper}
                                  data-project={
                                    project.id === "1"
                                      ? "citystake"
                                      : "bawshuman"
                                  }
                                >
                                  <Image
                                    src={image}
                                    alt={`${project.name} screenshot ${
                                      index + 1
                                    }`}
                                    fill
                                    className={styles.projectImage}
                                    priority={index === 0}
                                  />
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                      <div className={styles.projectContent}>
                        <h3 className={styles.projectName}>{project.name}</h3>
                        <p className={styles.projectDescription}>
                          {project.description}
                        </p>
                        <div className={styles.technologies}>
                          {project.technologies.map((tech, index) => (
                            <span key={index} className={styles.tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Past Projects</h2>
                <p className={styles.sectionDescription}>
                  Previous work showcasing my experience and capabilities.
                </p>
                <div className={styles.projectsGrid}>
                  {pastProjects.map((project: Project) => (
                    <div key={project.id} className={styles.projectCard}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={400}
                          height={300}
                          className={styles.projectImage}
                          priority
                        />
                      </div>
                      <div className={styles.projectContent}>
                        <h3 className={styles.projectName}>{project.name}</h3>
                        <p className={styles.projectDescription}>
                          {project.description}
                        </p>
                        <div className={styles.technologies}>
                          {project.technologies.map((tech, index) => (
                            <span key={index} className={styles.tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className={styles.buttonContainer}>
                          {project.learnMoreLink && (
                            <a
                              href={project.learnMoreLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.projectLink}
                            >
                              Learn More
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;
