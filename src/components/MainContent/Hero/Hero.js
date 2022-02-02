import React from 'react'
import cori from '../../../images/MainContent/Hero/Cori.svg'
import Social from '../../Social/Social'
import * as styles from './Hero.module.scss'

const Hero = () => {
  return (
   <div className={styles.block_hero}>
       <div className={styles.hero_text}>
           <h1 className={styles.title}>Leveraged yield farming is 
               <span className={styles.title_near}>NEAR</span>
               </h1>
               <p className={styles.text_content}>
               PembRock Finance is the first leveraged yield farming application on NEAR Protocol aimed to provide users with larger yields and NEAR blockchain with greater liquidity. PembRock Finance is almost ready to rock this world! Stay tuned!
               </p>
               <Social />
           </div>
       <div className={styles.hero_img}>
       <img src={cori} alt='img' />
       </div>
   </div>
  )
}

export default Hero;