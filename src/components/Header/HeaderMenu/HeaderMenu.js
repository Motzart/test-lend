import React from 'react';
import { Link } from 'gatsby'
import * as styles from './HeaderMenu.module.scss'

const HeaderMenu = ({list}) => {
    return (
        <nav className={styles.navigator}>
        <ul className={styles.header_list}> 
        {list.map((link, idx) => {
          return(
             <li className={styles.li_b} key={idx}>
              <Link to="/" className={styles.header_link}>
                {link.label}
              </Link>
              {link.icon && <img src={link.icon} className={styles.icon} alt='arrows' />}
          </li>
          )
            })}
        </ul>
      </nav>
    )
}

export default HeaderMenu;