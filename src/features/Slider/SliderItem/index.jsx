import React from 'react'
import Image from "next/image";

import styles from './style.module.css'

const SliderItem = ({image}) => {

  return (
    <div className={styles.container}>
        <Image src={image} fill alt="Proyect Image" />
    </div>
  )
}

export default SliderItem