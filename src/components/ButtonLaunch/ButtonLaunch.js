// library
import React from 'react'
import { Link } from 'gatsby'
// styles
import * as styles from '../../styles/buttonLaunch/ButtonLaunch.module.scss'

const ButtonLaunch = ({ handleClick }) => {
  return (
    <button onClick={handleClick.bind(this)} className={styles.button_connect}>
      <Link to={'/#community'} className={styles.button_text}>
        Join Comunity
      </Link>
    </button>
  )
}

export default ButtonLaunch
