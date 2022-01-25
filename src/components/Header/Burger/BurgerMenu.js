import React from 'react';
import { Link } from 'gatsby'
import * as styles from './BurgerMenu.module.scss'

const BurgerMenu = ({img, handleClick}) => {
    return (
      <nav className={styles.header_menu}>
      <ul className={styles.header_list}> 
      <li className={styles.li_a}>
        <Link to="/" className={styles.header_link_menu}>Menu</Link>
        </li>
        <li className={styles.li_b}>
          <Link to="/" className={styles.header_link}>
            <span className={styles.header_link_text}>Docs</span>
            </Link>
          <img src={img} alt='arrows' className={styles.arrows}/>
        </li>
        <li className={styles.li_b}>
          <Link to="/" className={styles.header_link}>Products</Link>
          <img src={img} alt='arrows' className={styles.arrows}/>
        </li>
        <li className={styles.li_b}>
          <Link to="/" className={styles.header_link}>Roadmap</Link>
          <img src={img} alt='arrows' className={styles.arrows}/>
        </li>
        <li className={styles.li_b}>
          <Link to="/" className={styles.header_link}>Team</Link>
          <img src={img} alt='arrows' className={styles.arrows}/>
        </li>
        <li className={styles.li_b}>
          <Link to="/" className={styles.header_link}>Partners</Link>
          <img src={img} alt='arrows' className={styles.arrows}/>
        </li>
      </ul>
    </nav>
    )
}

export default BurgerMenu;