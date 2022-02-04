// library
import React from 'react'
// styles
import * as styles from '../../../styles/mainContent/team.module.scss'
// static
import PhotoCEO from '../../../images/MainContent/Photo/ceo_photo.png'

export default function Team() {
  return (
    <section className={styles.team_section}>
      <h2 className={styles.title}>Team</h2>
      <div className={styles.team_block}>
        <div className={styles.contributor}>
          <div className={styles.photo}>
            <img src={PhotoCEO} alt="CEO-founder" />
          </div>
          <span className={styles.name}>Igor Stadnyk</span>
          <p className={styles.bio}>
            Founder and CEO with software development background and proven
            track record of launching and leading blockchain projects since
            2012, such as Minerall, INC4, and Ambrosus. Corgi devotee and Lead
            Rocker at PembRock.
          </p>
        </div>
        <div className={styles.contributor}>
          <div className={styles.photo}>
            <img src={PhotoCEO} alt="CEO-founder" />
          </div>
          <span className={styles.name}>Vitalii Dmytrenko</span>
          <p className={styles.bio}>
            CTO and Core Developer with more than 2 decades of experience in
            software and hardware development, reverse engineering and
            cybersecurity research. Cypherpunk. Web3 & DeFi advocate.
          </p>
        </div>
        <div className={styles.contributor}>
          <div className={styles.photo}>
            <img src={PhotoCEO} alt="CEO-founder" />
          </div>
          <span className={styles.name}>Oleksandr Molotsylo</span>
          <p className={styles.bio}>
            Front End Lead Developer with over 10 years of experience developing
            in different programming languages. Blockchain fan for the last 4
            years. Mentor, JS and ReactJS teacher.
          </p>
        </div>
        <div className={styles.contributor}>
          <div className={styles.photo}>
            <img src={PhotoCEO} alt="CEO-founder" />
          </div>
          <span className={styles.name}>Ivan Skrypachov</span>
          <p className={styles.bio}>
            Project Manager with 5+ years in Product IT. Guided by gained
            experience, Ivan smoothly manages teams of up to 30 people and
            builds processes from scratch. SCRUM guru.
          </p>
        </div>
      </div>
    </section>
  )
}
