import React, {useState, useRef} from 'react'
import ButtonLaunch from '../ButtonLaunch/ButtonLaunch'
import Logo from '../Header/Logo/Logo'
import HeaderMenu from '../Header/HeaderMenu/HeaderMenu'
import BurgerMenu from '../Header/Burger/BurgerMenu'
import logoImg from '../../images/header/header_logo.svg'
import imgArrows from '../../images/header/arrows.svg'
import docsArrows from '../../images/header/Vector.png'
// styles
import * as styles from './header.module.scss'

export const Header = () => {
  const [enableButton, setEnableButton] = useState(true);
  const [enableMenu, setEnableBurgerMenu] = useState(false);
  const burgerEl = useRef(null);
  // const menuEl = useRef(null);
  // const buttonEl = useRef(null);

  const[menu, setMenu] = useState(false);

  const addClasses = (element, nameClass) => {
    element.contains(nameClass) ? 
    element.remove(nameClass) :
    element.add(nameClass);
  }

  const noScroll = () => {
    if(!menu){
       document.body.style.overflow = "hidden";
       setMenu(true);
     } else{
      document.body.style.overflow = "visible";
      setMenu(false);
     }
  }

  const handleClickBtn = e => {
    console.log('click button Launch app');
  }

  const handleClick = e => {
     const classEl = burgerEl.current.classList ;
    //  const classMenuEl = menuEl.current.classList;
    //  const classButtonEl = buttonEl.current.classList;

     addClasses(classEl, `${styles.active}`);
    //  addClasses(classMenuEl, `${styles.active}`);
    //  addClasses(classButtonEl, `${styles.add_btn}`);

    setEnableButton(!enableButton);
    setEnableBurgerMenu(!enableMenu);

    //  noScroll();
  }

  const list = [
    {
      label: "Docs",
      icon: docsArrows,
    },
    {
      label: "Products",
      icon: '',
    },
    {
      label: "Roadmap",
      icon: '',
    },
    {
      label: "Team",
      icon: '',
    },
    {
      label: "Partners",
      icon: '',
    },
  ]

    return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_body}>
        <Logo img={logoImg} />
        <HeaderMenu list={list}/>
        {enableButton && <ButtonLaunch handleClick={handleClickBtn}/>}
        {enableMenu &&  <BurgerMenu img={imgArrows} handleClick={handleClick} />}
        <div  onClick={handleClick} className={styles.header_burger} ref={burgerEl}>
          <span></span>
        </div>
        </div>
      </div>
    </header>
  );
}
