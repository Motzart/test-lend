import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/header/header_logo.svg'
// styles
import * as styles from './header.module.scss'

export const Header = () => {
  const handleClick = e => {
    console.log('Hello');
    // var foo = document.getElementById("burger");

    // for (var i = 0; i < foo.length; i++) {
    //   foo[i].classList.remove("active");
    // }

    // e.currentTarget.classList.add("active");
  }

    return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_body}>
        <Link to="/" className={styles.header_logo}>
          <img src={logo} alt='logo'/>
        </Link>
        {/* <button className={styles.button_connect}>
          <p className={styles.button_text}>Launch app</p>
          </button> */}
        <div className={styles.header_burger} id='burger' onClick={handleClick}>
          <span></span>
        </div>
        <nav className={styles.header_menu}>
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
      </div>
    </header>
  );
}
