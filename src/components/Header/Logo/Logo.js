import React from 'react';
import * as styles from './Logo.module.scss'

const Logo = ({img}) => {
    return (
        <img src={img} alt='logo' className={styles.header_logo}/>
    )
}

export default Logo;