import React from 'react'


import styles from './style.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navbar__container}>
            <li>about</li>
            <li>portfolio</li>
            <li>contact</li>
        </ul>
    </nav>
  )
}

export default Navbar