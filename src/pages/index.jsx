import React from "react";
import { Link } from "react-scroll";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

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
      <Head>
        <title>Andres Gazui | Backend Developer</title>
        <meta property="author" content="Andres Gazui" />
        <meta name="description" content="Backend developer portfolio" />
        <meta property="robots" content="all" />
        <meta
          name="keywords"
          content="backend, developer, nodejs, javascript"
        />
        <meta property="og:title" content="Andres Gazui - Backend developer" />
        <meta
          property="og:description"
          content=" I am a Backend developer and passionate by technology with many years of experience building and maintaining applications"
        />
        <link rel="canonical" href="https://andresgazui.com" />
      </Head>
      <Header center={true} background={true}>
        {() => (
          <>
            <Navbar />
            <h1 className={styles.header_title}>
              <span>Hello</span> i'm Andres
            </h1>
            <p className={styles.header_subtitle}>
              I'm a backend developer with specialized experience with
              Javascript and Node.js enviroments
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
              <AnimatePresence>
                <WidgetsTabs changeView={changeView} />
                {selectedView === "about" && <AboutWidget />}

                {selectedView === "skills" && <SkillsWidget />}

                {selectedView === "contact" && <Contact />}
              </AnimatePresence>
            )}
          </WidgetsContainer>
        </section>

        <section name="portfolio" className={styles.portfolio__section}>
          <h2 className={styles.home__title}>Portfolio</h2>
          <SliderContainer>
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1672947767/portfolio/colfax_kjerjg_ybd1jl.webp" />
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1672947767/portfolio/classicar_is3pss_u0qyb8.webp" />
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1672947768/portfolio/disney_k773tm_wzclmn.webp" />
            <SliderItem image="https://res.cloudinary.com/dqd4krsof/image/upload/v1672947767/portfolio/ceaca_rgwyxi_ugguhi.webp" />
          </SliderContainer>

          {/* <p className={styles.portfolio__subtitle}>
            Discover more of my projects, which are based on different ways of applying a solution to a
            problem 
          </p> */}
          <div className={styles.ctaContainer}>
            <a
              className={styles.portfolio__button_cta}
              href="https://github.com/GodOmega"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover my github
            </a>
          </div>
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
