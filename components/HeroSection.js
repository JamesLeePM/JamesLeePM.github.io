import React, { useRef } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  ScrollToBottomIcon,
  TwitterIcon,
} from "../svg"; // Updated import path
import { useRouter } from "next/router";

function HeroSection() {
  const router = useRouter();
  const scrollToRef = useRef();
  const scrollHandler = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section-hero">
      <div className="row hero-content">
        <div className="header-text">
          <h1 className="heading-primary">My name is James Lee</h1>
          <h2 className="heading-secondary heading-secondary--green">
            AI Innovator and Product Technologist based remotely in USA
          </h2>
        </div>
        <p className="description-text">
          I&apos;m an experienced Product Executive empowering global teams to $1B+ success and the cofounder of
          CityStake (
          <a
            className="link"
            href="https://citystake.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            citystake.ai
          </a>
          ). Also founder of{" "}
          <a
            className="link"
            href="https://logist.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            LogistAI
          </a>
          , an AI-powered logistics optimization platform. Think of it as Siri or Bixby for Logistics.
        </p>
        <p className="description-text">
        With my extensive experience in product management, AI implementation, and data analytics 
        across industries like logistics, fintech, and healthcare, I&apos;m passionate about developing 
        innovative solutions that drive business growth. From transforming multi-million dollar products 
        into billion-dollar revenue generators to implementing cutting-edge AI and machine learning technologies, 
        I have a proven track record of delivering impactful results. If you&apos;re looking for a seasoned product leader 
        to help shape your next big project or strategic initiative, I&apos;d be excited to collaborate and bring your vision to life. 🚀🚀
        </p>
        {/* <div className="hero-btn-wrapper">
          <button
            className="button button-primary m-t-s m-b-s"
            onClick={() => router.push("/about")}
          >
            Learn More About Me
          </button>
        </div> */}
        <ul className="social-icons">
          <li>
            <a
              target="_blank"
              href="https://github.com/jamesakanoa"
              rel="noreferrer"
            >
              <GithubIcon className="social-icon" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luminary-james-lee/"
              rel="noreferrer"
            >
              <LinkedinIcon className="social-icon" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://medium.com/@jamesdlee77"
              rel="noreferrer"
            >
              <MediumIcon className="social-icon" />
            </a>
          </li>
        </ul>
        <div className="scroll-btn-container">
          <span
            className="scroll-btn"
            ref={scrollToRef}
            onClick={scrollHandler}
          >
            <ScrollToBottomIcon className="scroll-icon" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
