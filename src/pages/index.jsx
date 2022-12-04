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
          <p className={styles.portfolio__subtitle}>
            Discover some of my projects, which are based on various business
            models and represent different ways of applying a solution to a
            problem.
          </p>
          <SliderContainer>
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1670104924/portfolio/colfax_kjerjg.webp" />
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1670104906/portfolio/classicar_is3pss.webp" />
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1670105435/portfolio/disney_k773tm.webp" />
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1670104888/portfolio/ceaca_rgwyxi.webp" />
          </SliderContainer>
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
