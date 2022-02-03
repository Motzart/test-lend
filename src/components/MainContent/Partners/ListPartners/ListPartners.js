import React from 'react'

import * as styles from './ListPartners.module.scss'

const ListPartners = ({ partnersList }) => {
  return (
    <ul className={styles.list_partners}>
      {partnersList.map(({ icon, text }, idx) => {
        return (
          <li key={idx}>
            <div className={styles.one_partner}>
              <img src={icon} className={styles.img_partner} alt="icon" />
              <p className={styles.text}>{text}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ListPartners
