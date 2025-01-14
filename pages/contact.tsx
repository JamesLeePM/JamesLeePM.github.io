import Head from "next/head";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../styles/Contact.module.scss";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | James Lee</title>
        <meta
          name="description"
          content="Get in touch with James Lee. Let's discuss your next project or collaboration opportunity."
        />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <motion.div
            className={styles.contactSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.title}>Get in Touch</h1>
            <div className={styles.content}>
              <p className={styles.description}>
              I welcome new opportunities and collaborations. <br/>Please reach out and let's connect:
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.emailSection}>                  <a
                    href="mailto:jamesdlee77@gmail.com"
                    className={styles.emailAddress}
                  >
                    jamesdlee77@gmail.com
                  </a>
                </div>

                <div className={styles.socialLinks}>
                  <div className={styles.links}>
                    <a
                      href="https://linkedin.com/in/luminary-james-lee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <FaLinkedin />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/jamesakanoa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}
