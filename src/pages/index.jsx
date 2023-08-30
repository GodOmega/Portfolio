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
        <title>Andres Gazui | Web Developer</title>
        <meta property="author" content="Andres Gazui" />
        <meta name="description" content="Backend developer portfolio" />
        <meta property="robots" content="all" />
        <meta
          name="keywords"
          content="backend, full stack, frontend, web developer, nodejs, javascript"
        />
        <meta property="og:title" content="Andres Gazui - Web developer" />
        <meta
          property="og:description"
          content=" I am a Full stack developer and passionate by technology with many years of experience building and maintaining applications"
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
              Web developer, pasionate about technology and coding 🖥️
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
            <SliderItem
              description="Warehouse store"
              image="https://res.cloudinary.com/dqd4krsof/image/upload/v1672947767/portfolio/colfax_kjerjg_ybd1jl.webp"
            />
            <SliderItem
              description="Cars marketplace"
              image="https://res.cloudinary.com/dqd4krsof/image/upload/v1672947767/portfolio/classicar_is3pss_u0qyb8.webp"
            />
            <SliderItem
              description="Incomes and expenses tracker"
              image="https://res.cloudinary.com/dqd4krsof/image/upload/v1688771054/portfolio/contabilityApp_sp1kwe.webp"
            />
            <SliderItem
              description="Real time application to chat and watch videos with friends"
              image="https://res.cloudinary.com/dqd4krsof/image/upload/v1674266307/portfolio/realtimeVideo_sz5ii1.webp"
            />
            <SliderItem
              description="Music Application"
              image="https://res.cloudinary.com/dqd4krsof/image/upload/v1673918103/portfolio/omegaMusic_st9hmj.webp"
            />
          </SliderContainer>

          <div className={styles.ctaContainer}>
            <a
              className={styles.portfolio__button_cta}
              href="https://github.com/gazuiandres"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover my github
            </a>
          </div>
        </section>

        <footer name="contact" className={styles.footer}>
          <h2 className={styles.home__title}>Links</h2>
          <div>
            <Contact />
          </div>
        </footer>
      </main>
    </>
  );
};

export default index;
