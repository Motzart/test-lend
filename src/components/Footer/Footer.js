import React from 'react'
import Logo from '../Header/Logo/Logo'
import FooterMenu from './FooterMenu/FooterMenu'
import Social from '../Social/Social'
import menuList from '../../data/menu'
import logoImg from '../../images/header/header_logo.svg'
// styles
import * as styles from '../../styles/footer/footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_elements}>
        <div className={styles.footer_logo}>
          <Logo img={logoImg} />
        </div>
        <p className={styles.social_text}>We are in social networks</p>
        <div className={styles.social}>
          <Social className={styles.social} />
        </div>
        <div className={styles.footer_navigation}>
          <FooterMenu menuList={menuList} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.copyright_block}>
        <p className={styles.copyright}>2022 Pembrock Fin Corporation</p>
      </div>
    </footer>
  )
}
