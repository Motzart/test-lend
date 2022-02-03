import React from 'react';
import { Link } from 'gatsby'
import * as styles from './FooterMenu.module.scss'

const FooterMenu = ({list}) => {
    return (
        <nav>
        <ul className={styles.header_list}> 
        {list.map((link, idx) => {
          return(
             <li key={idx} className={styles.list_el}>
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

export default FooterMenu;