import React from "react";
import Image from "next/image";

import SliderDescription from "../SliderDescription";
import styles from "./style.module.css";

const SliderItem = ({ image, description }) => {
  return (
    <div className={styles.container}>
      <Image priority={true} src={image} fill alt="Proyect Image" />
      {description && (
        <SliderDescription>
          <p>{description}</p>
        </SliderDescription>
      )}
    </div>
  );
};

export default SliderItem;
