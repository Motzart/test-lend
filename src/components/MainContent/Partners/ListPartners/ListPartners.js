import React from 'react'

import * as styles from './ListPartners.module.scss'

const ListPartners = ({ partnersList }) => {
  return (
    <ul className={styles.list_partners}>
      {partnersList.map(({ icon, text }, idx) => {
        return (
          <li className={styles.one_partner} key={idx}>
            <img src={icon} className={styles.icon_partners} alt="icon" />
            <p className={styles.text}>{text}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default ListPartners
