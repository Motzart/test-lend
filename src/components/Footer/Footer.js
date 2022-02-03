import React from 'react'
import Logo from '../Header/Logo/Logo'
import FooterMenu from './FooterMenu/FooterMenu'
import Social from '../Social/Social'
import logoImg from '../../images/header/header_logo.svg'
import docsArrows from '../../images/header/docs_icon.svg'
// styles
import * as styles from './footer.module.scss'

export const Footer = () => {
  const list = [
    {
      label: 'Docs',
      icon: docsArrows,
    },
    {
      label: 'Products',
      icon: '',
    },
    {
      label: 'Roadmap',
      icon: '',
    },
    {
      label: 'Team',
      icon: '',
    },
    {
      label: 'Partners',
      icon: '',
    },
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_elements}>
        <div className={styles.footer_logo}>
        <Logo img={logoImg} />
        </div>
        
        <p className={styles.social_text}>We are in social networks</p>
        <div className={styles.social}>
          <Social className={styles.social}/>
        </div>
        <div className={styles.footer_navigation}>
          <FooterMenu list={list} className={styles.footer_menu}/>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.copyright_block}>
        <p className={styles.copyright}>2022 Pembrock Fin Corporation</p>
        </div>
      
    </footer>
  )
}
