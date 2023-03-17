import React from "react";

import styles from "./style.module.css";

const WidgetsTabs = ({ changeView }) => {
  return (
    <div className={styles.tabs__container}>
      <input id="tab-1" defaultChecked type="radio" name="group" />
      <input id="tab-2" type="radio" name="group" />
      <input id="tab-3" type="radio" name="group" />
      <div className={styles.buttons}>
        <label onClick={changeView} data-option="about" htmlFor="tab-1">
          About
        </label>
        <label onClick={changeView} data-option="skills" htmlFor="tab-2">
          Skills
        </label>
        <label onClick={changeView} data-option="contact" htmlFor="tab-3">
          Links
        </label>
      </div>
      <div className={styles.underline}></div>
    </div>
  );
};

export default WidgetsTabs;
