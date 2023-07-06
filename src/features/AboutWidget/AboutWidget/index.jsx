import React from "react";
import { motion } from "framer-motion";

import styles from "./style.module.css";

const AboutWidget = () => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        transition: 1.2,
        delay: 0.3
      }}
      className={styles.about__container}
    >
      <img src="/images/about_image.svg" alt="About Image" />
      <p>
        Hello there!, my name is Andres Gazui and I am passionate about
        technology and solutions that have a positive impact.
        I am a young man and having connected with technology
        inspires me to always strive for excellence and to do more and more
        ambitious things. I currently have more than 3 years of experience in
        Web development and one of my biggest goals is to participate with
        an incredible team in the development of high impact projects in the
        technology field.
      </p>
    </motion.article>
  );
};

export default AboutWidget;
