// library
import React from 'react'
// styles
import * as styles from '../../../../styles/MainContent/Info/token.module.scss'

export default function Token() {
  return (
    <div className={styles.token}>
      <div className={styles.shape_block}>
        <div className={styles.left_rectangle} />
        <div className={styles.right_rectangle} />
      </div>
      <div className={styles.token_info}>
        <h2 className={styles.title}>PEM Token</h2>
        <p className={styles.text}>
          The native token of PembRock Finance will support the financial
          ecosystem of the platform, reward early adopters, and provide a
          governance tool for the community.
        </p>
        <button type={'button'} className={styles.btn}>
          Read more
        </button>
      </div>
    </div>
  )
}
