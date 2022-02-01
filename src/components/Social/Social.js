import React from 'react';
import { Link } from 'gatsby';
import twitter from '../../images/social/twitter.svg'
import elips from '../../images/social/elips.svg'
import telegram from '../../images/social/telegram.svg'
import * as styles from './Social.module.scss'

const Social = () => {
    const iconSocial = [
        {
            label: "Telegram",
            icon: telegram,
          },
          {
            label: "Elips",
            icon: elips,
          },
          {
            label: "Twitter",
            icon: twitter,
          },
    ]

    return (
      <nav>
        <ul className={styles.social_block}> 
        {iconSocial.map(({icon, label}, idx) => {
          return(
             <li key={idx} className={styles.social_element}>
              <Link to="/">
               <div className={styles.social_circle}>
                  <img src={icon} alt={label} />
               </div>
              </Link>
             </li>
          )
            })}
        </ul>
      </nav>
    )
}

export default Social;