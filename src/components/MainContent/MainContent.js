// library
import React from 'react'
// styles
import * as styles from './mainContent.module.scss'
// components
import Roadmap from './Roadmap/Roadmap'
import Social from '../Social/Social'

export const MainContent = () => {
  return (
    <main className={styles.container}>
      <section className={styles.information_section}></section>
      <Roadmap />
      <Social />
      <section className={styles.team_section}></section>
      <section className={styles.community_section}></section>
    </main>
  )
}
