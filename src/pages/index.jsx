import React from "react";
import { Link } from "react-scroll";

import styles from "../styles/pages/home.module.css";

import Header from "../common/ui/Header";
import Navbar from "../common/ui/Navbar";
import Button from "../common/ui/Button";

import WidgetsContainer from "../features/AboutWidget/WidgetsContainer";
import WidgetsTabs from "../features/AboutWidget/WidgetsTabs";
import AboutWidget from "../features/AboutWidget/AboutWidget";
import SkillsWidget from "../features/AboutWidget/SkillsWidget";

import Contact from "../features/Contact";

import SliderContainer from "../features/Slider/SliderContainer";
import SliderItem from "../features/Slider/SliderItem";
const index = () => {
  return (
    <>
      <Header center={true} background={true}>
        {() => (
          <>
            <Navbar />
            <h1 className={styles.header_title}>
              <span>Hello</span> i'm Andres
            </h1>
            <p className={styles.header_subtitle}>
              I'm a backend developer with specialized experience with JS and
              Node.js enviroments
            </p>
            <Button>
              <Link to="about" smooth={true} duration={500}>
                Read more
              </Link>
            </Button>
          </>
        )}
      </Header>
      <main>
        <section name="about" className={styles.about__section}>
          <WidgetsContainer>
            {({ changeView, selectedView }) => (
              <>
                <WidgetsTabs changeView={changeView} />
                {selectedView === "about" && <AboutWidget />}

                {selectedView === "skills" && <SkillsWidget />}

                {selectedView === "contact" && <Contact />}
              </>
            )}
          </WidgetsContainer>
        </section>

        <section name="portfolio" className={styles.portfolio__section}>
          <h2 className={styles.home__title}>Portfolio</h2>
          <SliderContainer>
            <SliderItem image="https://raw.githubusercontent.com/GodOmega/OmegaDev/master/img/classicar-1.png" />
            <SliderItem image="https://raw.githubusercontent.com/GodOmega/OmegaDev/master/img/ceaca.png" />
          </SliderContainer>
          <p className={styles.portfolio__subtitle}>
            Discover some of my projects, which are based on various business
            models and represent different ways of applying a solution to a
            problem.
          </p>
        </section>

        <footer name="contact" className={styles.footer}>
          <h2 className={styles.home__title}>Contact</h2>
          <div>
            <Contact />
          </div>
        </footer>
      </main>
    </>
  );
};

export default index;
