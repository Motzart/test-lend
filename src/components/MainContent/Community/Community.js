import React from 'react'
import land from '../../../images/MainContent/Community/land.svg'
// styles
import * as styles from './Community.module.scss'
// components

const Community = () => {
  return (
    <section className={styles.community_section}>
      <img src={land} className={styles.land_icon} alt="land" />
    </section>
  )
}

export default Community
