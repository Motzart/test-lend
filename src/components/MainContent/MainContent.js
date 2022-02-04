// library
import React from 'react'
// styles
import * as styles from './mainContent.module.scss'
// components
import Hero from './Hero/Hero'
import Info from './Info/Info'
import Roadmap from './Roadmap/Roadmap'
import Team from './Team/Team'

export const MainContent = ({ pageContent }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero />
        <Info />
        <Roadmap data={pageContent} />
        <Team />
        <section className={styles.community_section}></section>
      </div>
    </main>
  )
}
