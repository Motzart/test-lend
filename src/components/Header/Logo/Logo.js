// library
import React from 'react'
import { ReactSVG } from 'react-svg'
// styles
import * as styles from '../../../styles/logo/Logo.module.scss'

const Logo = ({ img }) => {
  return <ReactSVG className={styles.header_logo} src={img} />
}

export default Logo
