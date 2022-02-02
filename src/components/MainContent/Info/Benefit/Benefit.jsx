// library
import React from 'react'
// styles
import * as styles from '../../../../styles/Info/benefit.module.scss'
//static
import CommunityImg from '../../../../images/MainContent/community_icon.svg'
import ProfitImg from '../../../../images/MainContent/profit_icon.svg'
import RocketImg from '../../../../images/MainContent/rocket_icon.svg'

export default function Bnefit() {
  return (
    <div className={styles.benefit}>
      <div className={styles.item}>
        <img width={76} height={76} src={CommunityImg} alt="Community icon" />
        <p>
          PembRock’s community is at the driver’s seat of further PembRock
          Finance development and evolution.
        </p>
      </div>
      <div className={styles.item}>
        <img width={76} height={76} src={ProfitImg} alt="Profit icon" />
        <p>
          Leverage yield farming gives the opportunity to increase your stake
          with borrowed funds and as a result, gain more profits.
        </p>
      </div>
      <div className={styles.item}>
        <img width={76} height={76} src={RocketImg} alt="Rocket icon" />
        <p>
          PembRock Finance obtained grant support from Near Foundation to expand
          Near Ecosystem with new financial tools.
        </p>
      </div>
    </div>
  )
}
