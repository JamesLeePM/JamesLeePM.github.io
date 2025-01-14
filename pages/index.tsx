import React from "react";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>James Lee - Product Technology Leader</title>
        <meta
          name="description"
          content="James Lee - Product Technology Leader specializing in AI implementation and emerging technologies."
        />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <HeroSection />
        </main>
      </div>
    </>
  );
};

export default Home;
