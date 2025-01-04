import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import s from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={s["socials"]}>
      <a
        href="https://github.com/jamesakanoa"
        target="_blank"
        rel="noreferrer"
        className={s["icon-wrapper"]}
      >
        <BsGithub className={s["icon"]} />
      </a>
      <a
        href="https://linkedin.com/in/luminary-james-lee"
        target="_blank"
        rel="noreferrer"
        className={s["icon-wrapper"]}
      >
        <BsLinkedin className={s["icon"]} />
      </a>
      
    </div>
  );
}
