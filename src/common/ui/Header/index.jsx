import React from 'react'
import clsx from 'classnames';
import styles from './style.module.css'

const Header = ({background, children, center}) => {
    
  const headerStyles = clsx({
    [styles['header']]: true,
    [styles['withBackground']]: background,
    [styles['withCenter']]: center,
  })

  return (
    <header className={headerStyles}>
        {/* <Navbar /> */}
        {children()}
    </header>
  )
}

export default Header