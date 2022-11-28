import React from "react";

import styles from "../styles/pages/home.module.css";
import Header from "../common/ui/Header";
import Navbar from "../common/ui/Navbar";
import Button from "../common/ui/Button";

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
              Read more
            </Button>
          </>
        )}
      </Header>
    </>
  );
};

export default index;
