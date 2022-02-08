import React from 'react'
import { Link } from 'gatsby'
import * as styles from './HeaderMenu.module.scss'

const HeaderMenu = ({ menuList }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.header_list}>
        {menuList.map((link, idx) => {
          return (
            <li key={idx}>
              <Link to={link.href} className={styles.header_link}>
                {link.label}
              </Link>
              {link.icon && (
                <img src={link.icon} className={styles.icon} alt="arrows" />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderMenu
