// library
import React, { useState, useRef } from 'react'
// components
import ButtonLaunch from '../ButtonLaunch/ButtonLaunch'
import Logo from '../Header/Logo/Logo'
import HeaderMenu from '../Header/HeaderMenu/HeaderMenu'
import BurgerMenu from '../Header/Burger/BurgerMenu'
import logoImg from '../../images/header/header_logo.svg'
import imgArrows from '../../images/header/arrows.svg'
import menuList from '../../data/menu'
// styles
import * as styles from './header.module.scss'

export const Header = () => {
  const [enableButton, setEnableButton] = useState(true)
  const [enableMenu, setEnableBurgerMenu] = useState(false)
  const burgerEl = useRef(null)

  const [menu, setMenu] = useState(false)

  const addClasses = (element, nameClass) => {
    element.contains(nameClass)
      ? element.remove(nameClass)
      : element.add(nameClass)
  }

  const noScroll = () => {
    if (!menu) {
      document.body.style.overflow = 'hidden'
      setMenu(true)
    } else {
      document.body.style.overflow = 'visible'
      setMenu(false)
    }
  }

  const handleClickBtn = (e) => {
    console.log('click button Launch app')
  }

  const handleClick = (e) => {
    const classEl = burgerEl.current.classList

    addClasses(classEl, `${styles.active}`)

    setEnableButton(!enableButton)
    setEnableBurgerMenu(!enableMenu)

    noScroll()
  }

  return (
    // transform: translate3d(0);
    <header className={styles.header}>
      <div className={styles.header_body}>
        <div className={styles.menu_logo_block}>
          <Logo img={logoImg} />
          <HeaderMenu menuList={menuList} />
        </div>
        <div className={styles.menu_block}>
          {enableButton && <ButtonLaunch handleClick={handleClickBtn} />}
          {enableMenu && (
            <BurgerMenu img={imgArrows} menuList={menuList} handleClick={handleClick} />
          )}
          <button
            onClick={handleClick}
            className={styles.header_burger}
            ref={burgerEl}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
