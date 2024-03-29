import React from 'react'
import land from '../../../images/MainContent/Community/land.svg'
import dog from '../../../images/MainContent/Community/dog.png'
// styles
import * as styles from '../../../styles/mainContent/community/community.module.scss'
import * as background from '../../../styles/variables.module.scss'
// components
import Social from '../../Social/Social'

const Community = () => {
  const backgroundColor = { backgroundColor: background.white }

  return (
    <section className={styles.community_section} id="community">
      <img src={land} className={styles.land_icon} alt="land" />
      <div className={styles.test}>
        <div className={styles.text_block}>
          <h3 className={styles.titl_block}>Join Our Community</h3>
          <p className={styles.p_block}>
            Be part of the PembRock community, keep abreast with our updates,
            and rock among like-minded Rockers.
          </p>
          <Social backgroundColor={backgroundColor} />
        </div>
        <div className={styles.dog_block}>
          <img src={dog} className={styles.dog_icon} alt="land" />
        </div>
      </div>
    </section>
  )
}

export default Community
