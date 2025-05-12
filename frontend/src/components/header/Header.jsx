import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router'
import { FaShoppingBag } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <img src="https://preview.colorlib.com/theme/winter/img/logo.png.webp" alt="Logo" />
        </div>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/basket'}>Basket</Link>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <div className={styles.iconbox}>
          <FaShoppingBag id={styles.icon}/>
          <SlMagnifier id={styles.icon}/>
        </div>
      </header>
    </div>
  )
}

export default Header
