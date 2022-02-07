// library
import React from 'react'
// styles
import * as styles from './mainContent.module.scss'
// components
import Info from './Info/Info'
import Roadmap from './Roadmap/Roadmap'
import Team from './Team/Team'
import Partners from './Partners/Partners'

export const MainContent = ({ pageContent }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Info />
        <Roadmap data={pageContent} />
        <Team />
        <Partners />
        <section className={styles.community_section}></section>
      </div>
    </main>
  )
}
