import React from "react";
import Image from "next/image";
// import Contact from "./Contact";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container row">
        {/* <Contact /> */}
        <div className="social-links">
          <Image src="/img/github.svg" alt="GitHub" width={24} height={24} />
          <Image src="/img/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </div>
        <a className="footer-email" href="mailto:jamesdlee77@gmail.com">
          jamesdlee77@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
