import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./FeaturedProjects.module.scss";
import featuredProjects from "./Featured";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const FeaturedProjects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.featuredProjects}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.slide}>
                <div className={styles.projectCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      width={800}
                      height={600}
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
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        View Project <FaArrowRight className={styles.arrow} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.cta}>
          <Link href="/portfolio" className={styles.ctaButton}>
            View All Projects <FaArrowRight className={styles.arrow} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
