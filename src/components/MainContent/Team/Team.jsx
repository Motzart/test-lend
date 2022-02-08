// library
import React from 'react'
// styles
import * as styles from '../../../styles/mainContent/team.module.scss'
// static
import PhotoCEO from '../../../images/MainContent/Photo/Igor_Stadnyk.png'
import PhotoBack from '../../../images/MainContent/Photo/Vitalii_Dmytrenko.png'
import PhotoFront from '../../../images/MainContent/Photo/Oleksandr_Molotsylo.png'
import PhotoProject from '../../../images/MainContent/Photo/Ivan_Skrypachov.png'

export default function Team() {
  return (
    <section className={styles.team_section}>
      <h2 className={styles.title}><span id="team"></span>Team</h2>
      <div className={styles.team_block}>
        <div className={styles.contributor}>
          <img src={PhotoCEO} alt="CEO-founder" />
          <p className={styles.name}>Igor Stadnyk</p>
          <p className={styles.bio}>
            Founder and CEO with software development background and proven
            track record of launching and leading blockchain projects since
            2012, such as Minerall, INC4, and Ambrosus. Corgi devotee and Lead
            Rocker at PembRock.
          </p>
        </div>
        <div className={styles.contributor}>
          <img src={PhotoBack} alt="Back-end teamlead" />
          <p className={styles.name}>Vitalii Dmytrenko</p>
          <p className={styles.bio}>
            CTO and Core Developer with more than 2 decades of experience in
            software and hardware development, reverse engineering and
            cybersecurity research. Cypherpunk. Web3 & DeFi advocate.
          </p>
        </div>
        <div className={styles.contributor}>
          <img src={PhotoFront} alt="Front-end teamlead" />
          <p className={styles.name}>Oleksandr Molotsylo</p>
          <p className={styles.bio}>
            Front End Lead Developer with over 10 years of experience developing
            in different programming languages. Blockchain fan for the last 4
            years. Mentor, JS and ReactJS teacher.
          </p>
        </div>
        <div className={styles.contributor}>
          <img src={PhotoProject} alt="Project manager" />
          <p className={styles.name}>Ivan Skrypachov</p>
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
