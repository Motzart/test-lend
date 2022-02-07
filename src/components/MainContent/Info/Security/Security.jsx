// library
import React from 'react'
// styles
import * as styles from '../../../../styles/Info/security.module.scss'
// static
import TriangleImg from '../../../../images/MainContent/triangle_security.svg'
import LockImg from '../../../../images/MainContent/lock.svg'
import SecurityShapeImg from '../../../../images/MainContent/security_shape.svg'

export default function Security() {
  return (
    <div className={styles.security}>
      <div className={styles.info}>
        <h2 className={styles.title}>Strictly Audited</h2>
        <p>
          Before deploying to mainnet, PembRock will be precisely audited and
          checked for security.
        </p>
      </div>
      <div className={styles.img_block}>
        <img
          width={220}
          height={220}
          src={TriangleImg}
          className={styles.triangle_shape}
          alt="Triangle shape with black shadow"
        />
        <div className={styles.security_img_wrapper}>
          <img width={160} src={SecurityShapeImg} alt="Security shape icon" />
          <img src={LockImg} className={styles.lock_img} alt="Lock icon" />
        </div>
        <img
          width={220}
          height={220}
          src={TriangleImg}
          className={styles.triangle_shape}
          alt="Triangle shape with black shadow"
        />
      </div>
    </div>
  )
}
