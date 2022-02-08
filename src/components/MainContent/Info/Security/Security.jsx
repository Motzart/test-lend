// library
import React from 'react'
import { ReactSVG } from 'react-svg'
// styles
import * as styles from '../../../../styles/MainContent/Info/security.module.scss'
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
        <ReactSVG className={styles.triangle_shape} src={TriangleImg} />
        <div className={styles.security_img_wrapper}>
          <ReactSVG src={SecurityShapeImg} />
          <ReactSVG className={styles.lock_img} src={LockImg} />
        </div>
        <ReactSVG className={styles.triangle_shape} src={TriangleImg} />
      </div>
    </div>
  )
}
