import React from "react";
import Image from "next/image";

import styles from "./style.module.css";

const SliderItem = ({ image }) => {
  return (
    <div className={styles.container}>
      <Image priority={true} src={image} fill alt="Proyect Image" />
    </div>
  );
};

export default SliderItem;
