import React, {useRef} from 'react'
import { Link } from 'gatsby'
import logo from '../../images/header/header_logo.svg'
import arrows from '../../images/header/arrows.svg'
// styles
import * as styles from './header.module.scss'

export const Header = () => {
  const burgerEl = useRef(null);
  const menuEl = useRef(null);
  const buttonEl = useRef(null);

  const handleClick = e => {
     const classEl = burgerEl.current.classList ;
     const classMenuEl = menuEl.current.classList;
     const classButtonEl = buttonEl.current.classList;

      classEl.contains(`${styles.active}`) ? 
      classEl.remove(`${styles.active}`) :
      classEl.add(`${styles.active}`);

      classMenuEl.contains(`${styles.active}`) ? 
      classMenuEl.remove(`${styles.active}`) :
      classMenuEl.add(`${styles.active}`);

      classButtonEl.contains(`${styles.add_btn}`) ? 
      classButtonEl.remove(`${styles.add_btn}`) :
      classButtonEl.add(`${styles.add_btn}`);

  }

    return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_body}>
        <Link to="/" className={styles.header_logo}>
          <img src={logo} alt='logo'/>
        </Link>
        <button className={styles.button_connect} ref={buttonEl}>
          <p className={styles.button_text}>Launch app</p>
          </button>
        <div className={styles.header_burger} ref={menuEl} onClick={handleClick}>
          <span></span>
        </div>
        <nav className={styles.header_menu} ref={burgerEl}>
          <ul className={styles.header_list}> 
          <li className={styles.li_a}>
            <Link to="/" className={styles.header_link_menu}>Menu</Link>
            </li>
            <li className={styles.li_b}>
              <Link to="/" className={styles.header_link}>
                <span className={styles.header_link_text}>Docs</span>
                </Link>
              <img src={arrows} alt='arrows' className={styles.arrows}/>
            </li>
            <li className={styles.li_b}>
              <Link to="/" className={styles.header_link}>Products</Link>
              <img src={arrows} alt='arrows' className={styles.arrows}/>
            </li>
            <li className={styles.li_b}>
              <Link to="/" className={styles.header_link}>Roadmap</Link>
              <img src={arrows} alt='arrows' className={styles.arrows}/>
            </li>
            <li className={styles.li_b}>
              <Link to="/" className={styles.header_link}>Team</Link>
              <img src={arrows} alt='arrows' className={styles.arrows}/>
            </li>
            <li className={styles.li_b}>
              <Link to="/" className={styles.header_link}>Partners</Link>
              <img src={arrows} alt='arrows' className={styles.arrows}/>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
}
