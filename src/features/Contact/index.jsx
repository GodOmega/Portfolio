import React from "react";
import Link from "next/link";

import styles from "./style.module.css";

const Contact = () => {
  return (
    <article className={styles.contact__container}>
      <div className={styles.contact__item}>
        <img src="/icons/email.svg" alt="Email Icon" />
        <p>gazuiandres@gmail.com</p>
      </div>

      <Link
        href="https://www.linkedin.com/in/omegadev/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contact__item}
      >
        <img src="/icons/linkedin.svg" alt="Linkedin Icon" />
        <p>Linkedin</p>
      </Link>

      <Link
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contact__item}
      >
        <img src="/icons/github.svg" alt="Github Icon" />
        <p>Github</p>
      </Link>

      <Link
        href="https://platzi.com/p/omegadev/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contact__item}
      >
        <img src="/icons/platzi.svg" alt="Platzi Icon" />
        <p>Platzi</p>
      </Link>
    </article>
  );
};

export default Contact;
