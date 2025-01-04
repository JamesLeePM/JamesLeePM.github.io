import React from "react";
import Image from 'next/image';
import s from "./AboutPage.module.scss";
import Socials from "../Socials";
import ProductLeaderContent from "../ProductLeaderContent";

function AboutPage() {
  return (
    <main className={s["about-page"]}>
      <div className={s["about-header"]}>
        <h1>About Me</h1>
      </div>
      {/* The 'row' class is used to apply row-based styling */}
      <div className={`${s["body-content"]} row`}>
        <hr className="divider-2" />
        <div className={s["author-wrapper"]}>
          <Image
            src="/img/james-developer.png"
            alt="James Lee"
            width={150}
            height={150}
          />
        </div>

        <div className={s["details"]}>
          <h3>James Lee</h3>
          <h4>Product Technologist</h4>
          <Socials />
        </div>
      </div>
      <div className={s["content"]}>
        <ProductLeaderContent />
      </div>
    </main>
  );
}

export default AboutPage;
