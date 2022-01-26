import React from 'react';
import { Link } from 'gatsby'
import * as styles from './BurgerMenu.module.scss'

const BurgerMenu = ({img, list}) => {
    return (
      <nav className={styles.header_menu}>
      <ul className={styles.header_list}> 
      <li className={styles.li_a}>
        <Link to="/" className={styles.header_link_menu}>Menu</Link>
        </li>

        {list.map((link, idx) => {
          return(
             <li className={styles.li_b} key={idx}>
              <Link to="/" className={styles.header_link}>
                {link.label}
              </Link>
              {link.icon && <img src={link.icon} className={styles.icon} alt='arrows' />}
              <img src={img} alt='arrows' className={styles.arrows}/>
          </li>
          )
            })}
      </ul>
    </nav>
    )
}

export default BurgerMenu;