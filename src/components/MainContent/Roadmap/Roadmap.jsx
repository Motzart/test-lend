// library
import React from 'react'
// config
import { RoadMapConfig } from '../../../config/roadmap-config'
// static
import * as styles from './roadmap.module.scss'
import activeLine from '../../../images/MainContent/roadmap_active.svg'
import noActiveLine from '../../../images/MainContent/roadmap_noactive.svg'
import gradientLine from '../../../images/MainContent/roadmap_gradient_line.svg'

export default function Roadmap() {
  // jsxElements
  const imgNoActiveLine = <img src={noActiveLine} alt="Roadmmap line" />
  const imgNoActiveLineTransform = (
    <img src={noActiveLine} className={styles.transform} alt="Roadmmap line" />
  )
  const pickCircle = (
    <div className={styles.pickCircle}>
      <div className={styles.innerCircle} />
    </div>
  )
  const valleyCircle = (
    <div className={styles.valleyCircle}>
      <div className={styles.innerCircle} />
    </div>
  )

  return (
    <section className={styles.roadmap_section}>
      <h2 className={styles.title}>Roadmap</h2>
      <div className={styles.roadmap}>
        {RoadMapConfig.oddMilestone.map((el, index) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.disc} />
              <h3 className={styles.sub_title}>{el.subTitle}</h3>
              <ul className={styles.step_list}>
                {el.info.map((el, index) => {
                  return (
                    <li key={index} className={styles.step}>
                      {el.link ? (
                        <span className={styles.text}>
                          {el.text}
                          <a
                            href="https://ref.finance"
                            className={styles.link}
                            target={'_blank'}
                            rel="noreferrer nofollow noopener"
                          >
                            {el.linkText}
                          </a>
                        </span>
                      ) : (
                        <span className={styles.text}>{el.text}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        <div className={styles.item}>
          {pickCircle}
          <img src={activeLine} alt="Roadmmap line" />
        </div>
        <div className={styles.item}>
          {valleyCircle}
          {imgNoActiveLine}
        </div>
        <div className={styles.item}>
          {pickCircle}
          {imgNoActiveLineTransform}
        </div>
        <div className={styles.item}>
          {valleyCircle}
          {imgNoActiveLine}
        </div>
        <div className={styles.item}>
          {pickCircle}
          {imgNoActiveLineTransform}
          <img src={gradientLine} alt="Roadmmap line" />
        </div>
        {RoadMapConfig.evenMilestone.map((el, index) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.disc} />
              <h3 className={styles.sub_title}>{el.subTitle}</h3>
              <ul className={styles.step_list}>
                {el.info.map((el, index) => {
                  return (
                    <li key={index} className={styles.step}>
                      {el.link ? (
                        <span className={styles.text}>
                          <a
                            href="https://ref.finance"
                            className={styles.link}
                            target={'_blank'}
                            rel="noreferrer nofollow noopener"
                          >
                            {el.linkText}
                          </a>
                          {el.text}
                        </span>
                      ) : (
                        <span className={styles.text}>{el.text}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
