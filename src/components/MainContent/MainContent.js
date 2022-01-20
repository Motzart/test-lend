import React from 'react'
// import { Link } from 'gatsby'

// styles
import * as styles from './mainContent.module.scss'

export const MainContent = () => {
  return (
    <main className={styles.container}>
      <section className={styles.near_pembrock_section}></section>
      <section className={styles.information_section}></section>
      <section className={styles.roadmap_section}></section>
      <section className={styles.team_section}></section>
      <section className={styles.community_section}></section>
    </main>
  )
}
