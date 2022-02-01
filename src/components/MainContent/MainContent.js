// library
import React from 'react'
// styles
import * as styles from './mainContent.module.scss'
// components
import Info from './Info/Info'
import Roadmap from './Roadmap/Roadmap'

export const MainContent = ({ pageContent }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Info />
        <Roadmap data={pageContent} />
        <section className={styles.team_section}></section>
        <section className={styles.community_section}></section>
      </div>
    </main>
  )
}
