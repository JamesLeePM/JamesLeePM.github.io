import React from "react";
// import Contact from "./Contact";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container row">
        {/* <Contact /> */}
        <div className="social-links">
          <a href="https://github.com/jamesakanoa">
            <img src="./img/github.svg" type="image/svg+xml"></img>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/luminary-james-lee">
            <img src="./img/linkedin.svg" type="image/svg+xml"></img>
          </a>
          <a target="_blank" href="https://medium.com/@jamesdlee77">
            <img src="./img/medium.svg" type="image/svg+xml"></img>
          </a>

        </div>
        <a className="footer-email" href="mailto:jamesdlee77@gmail.com">
          jamesdlee77@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
