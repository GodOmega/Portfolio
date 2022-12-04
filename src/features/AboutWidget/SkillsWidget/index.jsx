import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./style.module.css";
import skills from "./skillsElements";

const SkillsWidget = () => {
  const { hardSkills, softSkills } = skills;
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        transition: 0.6,
      }}
      className={styles.skills__section}
    >
      <div className={styles.skills__container}>
        <h3 className={styles.skills__container_title}>Hard Skills</h3>
        <ul>
          {hardSkills.map(({ iconUrl, name }, index) => (
            <li key={index}>
              <picture>
                <Image
                  src={iconUrl}
                  sizes="(max-width: 100vw)"
                  fill
                  alt={`${name} Icon`}
                />
              </picture>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.skills__container}>
        <h3 className={styles.skills__container_title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ iconUrl, name }, index) => (
            <li key={index}>
              <picture>
                <Image
                  src={iconUrl}
                  sizes="(max-width: 100vw)"
                  fill
                  alt={`${name} Icon`}
                />
              </picture>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default SkillsWidget;
