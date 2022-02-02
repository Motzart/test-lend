// library
import React from 'react'
// styles
import * as styles from './mainContent.module.scss'
// components
import Hero from './Hero/Hero'
import Roadmap from './Roadmap/Roadmap'

export const MainContent = ({ pageContent }) => {
  return (
    <main className={styles.container}>
      <section className={styles.information_section}></section>
      <Hero />
      <Roadmap data={pageContent} />
      <section className={styles.team_section}></section>
      <section className={styles.community_section}></section>
    </main>
  )
}
