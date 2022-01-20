import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/header/header_logo.svg'
// styles
import * as styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation_block}>
        <Link to="/">
          <img src={logo} alt='logo'/>
          {/* <span>PembRock</span> */}
        </Link>
        <button className={styles.button_connect}>
          <p className={styles.button_text}>Launch app</p>
          </button>
        <div className={styles.header_burger}>
          <span></span>
          </div>
        <nav className={styles.navigation}>
          <ul className={styles.header_list}> 
            <li>
              <Link to="/" className={styles.header_link}>Docs</Link>
            </li>
            <li>
              <Link to="/" className={styles.header_link}>Products</Link>
            </li>
            <li>
              <Link to="/" className={styles.header_link}>Roadmap</Link>
            </li>
            <li>
              <Link to="/" className={styles.header_link}>Team</Link>
            </li>
            <li>
              <Link to="/" className={styles.header_link}>Partners</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.launch_block}></div>
    </header>
  )
}
