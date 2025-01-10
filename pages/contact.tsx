import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
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
        <Header />
        <main className={styles.main}>
          <Contact />
        </main>
      </div>
    </>
  );
}
