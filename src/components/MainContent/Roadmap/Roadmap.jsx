// library
import React from 'react'
// static
import * as styles from './roadmap.module.scss'
import activeLine from '../../../images/MainContent/roadmap_active.svg'
import noActiveLine from '../../../images/MainContent/roadmap_noactive.svg'
import gradientLine from '../../../images/MainContent/roadmap_gradient_line.svg'

export default function Roadmap() {
  const imgNoActiveLine = <img src={noActiveLine} alt="Roadmmap line" />
  const imgNoActiveLineTransform = (
    <img src={noActiveLine} className={styles.transform} alt="Roadmmap line" />
  )

  return (
    <section className={styles.roadmap_section}>
      <h2 className={styles.title}>Roadmap</h2>
      <div className={styles.roadmap}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>

        <div className={styles.item}>
          <img src={activeLine} alt="Roadmmap line" />
        </div>
        <div className={styles.item}>{imgNoActiveLine}</div>
        <div className={styles.item}>{imgNoActiveLineTransform}</div>
        <div className={styles.item}>{imgNoActiveLine}</div>
        <div className={styles.item}>
          {imgNoActiveLineTransform}
          <img src={gradientLine} alt="Roadmmap line" />
        </div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </section>
  )
}
