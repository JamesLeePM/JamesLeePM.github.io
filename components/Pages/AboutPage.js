import React from "react";
import s from "./AboutPage.module.scss";
import Socials from "../Socials";
import ProductLeaderContent from "../ProductLeaderContent";

function AboutPage() {
  return (
    <main className={s["about-page"]}>
      <div className={s["about-header"]}>
        <h1>About Me</h1>
      </div>
      <div className={`${s["body-content"]} row`}>
        <hr className="divider-2" />
        <div className={s["author-wrapper"]}>
          <div className={s["image-wrapper"]}>
            <img
              src="./img/james-developer.png"
              alt="James Lee"
              className={s["author-img"]}
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
      </div>
    </main>
  );
}

export default AboutPage;
