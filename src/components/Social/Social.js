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
            url: 'https://t.me/pembrock_finance',
          },
          {
            label: "Elips",
            icon: elips,
            url: 'https://medium.com/@pembrock.finance',
          },
          {
            label: "Twitter",
            icon: twitter,
            url: 'https://twitter.com/PembrockFi',
          },
    ]

    return (
      <nav>
        <ul className={styles.social_block}> 
        {iconSocial.map(({icon, label, url}, idx) => {
          return(
             <li key={idx} className={styles.social_element}>
              <Link to={url} target='_blank' rel='noreferrer nofollow noopener'>
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