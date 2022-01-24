import React from 'react'
import * as styles from './ButtonLaunch.module.scss'

const ButtonLaunch = ({handleClick}) => {
    // console.log(props);
    return (
        // <button></button>
        <button onClick={handleClick.bind(this)} className={styles.button_connect}>
          <p className={styles.button_text} >Launch app</p>
          </button>
    )
}

export default ButtonLaunch;