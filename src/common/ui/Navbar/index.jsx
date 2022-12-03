import React from "react";
import { Link } from "react-scroll";

import styles from "./style.module.css";

const Navbar = () => {
  const smooth = true;
  const duration = 500;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__container}>
        <li>
          <Link to="about" smooth={smooth} duration={duration}>
            about
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={smooth} duration={duration}>
            portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={smooth} duration={duration}>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
