import React from 'react';
import { Link } from 'gatsby'
import * as styles from './FooterMenu.module.scss'

const FooterMenu = ({menuList}) => {
    return (
        <nav>
        <ul className={styles.header_list}> 
        {menuList.map((link, idx) => {
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