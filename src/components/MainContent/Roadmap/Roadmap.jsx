// library
import React from 'react'
// config
import { RoadMapConfig } from '../../../config/roadmap-config'

import { LanguageSwitcher } from '../../LanguageSwitcher'

// static
import * as styles from '../../../styles/mainContent/roadmap.module.scss'
import activeLine from '../../../images/MainContent/roadmap_active.svg'
import noActiveLine from '../../../images/MainContent/roadmap_noactive.svg'
import gradientLine from '../../../images/MainContent/roadmap_gradient_line.svg'

const Roadmap = ({ data }) => {
  // jsxElements
  const imgNoActiveLine = <img src={noActiveLine} alt="Roadmmap active line" />
  const imgNoActiveLineTransform = (
    <img src={noActiveLine} className={styles.transform} alt="Roadmmap line" />
  )
  const extremumCircle = (
    <div className={styles.extremumCircle}>
      <div className={styles.innerCircle} />
    </div>
  )
  return (
    <section className={styles.roadmap_section} id="roadmap">
      <LanguageSwitcher lang={data.lang} altLangs={data.alternate_languages} />
      <h2 className={styles.title}>{data.data.banner_title.text}</h2>
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
          {extremumCircle}
          <img src={activeLine} alt="Roadmmap line" />
        </div>
        <div className={styles.item}>
          {extremumCircle}
          {imgNoActiveLine}
        </div>
        <div className={styles.item}>
          {extremumCircle}
          {imgNoActiveLineTransform}
        </div>
        <div className={styles.item}>
          {extremumCircle}
          {imgNoActiveLine}
        </div>
        <div className={styles.item}>
          {extremumCircle}
          {imgNoActiveLineTransform}
          <img src={gradientLine} alt="Roadmmap gradient line" />
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

export default Roadmap
