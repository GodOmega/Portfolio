import React, { useState } from "react";

import styles from "./style.module.css";

const WidgetsContainer = ({ children }) => {
  const [selectedView, setSelectedView] = useState("about");

  const changeView = (event) => {
    const option = event.target.getAttribute("data-option");
    setSelectedView(option);
  };

  return (
    <div className={styles.widgets__container}>
      {children({ changeView, selectedView })}
    </div>
  );
};

export default WidgetsContainer;
