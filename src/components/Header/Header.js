import React from 'react'
import { Link } from 'gatsby'
// styles
import * as styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation_block}>
        <Link to="/">
          <div className={styles.logo}>PembRock</div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.launch_block}></div>
    </header>
  )
}
