// library
import React from 'react'
// styles
import * as styles from '../../../../styles/mainContent/Info/benefit.module.scss'
//static
import CommunityImg from '../../../../images/MainContent/community_icon.svg'
import ProfitImg from '../../../../images/MainContent/profit_icon.svg'
import RocketImg from '../../../../images/MainContent/rocket_icon.svg'

export default function Benefit() {
  return (
    <div className={styles.benefit}>
      <div className={styles.item}>
        <h2><span id="products"></span></h2>
        <img width={76} height={76} src={CommunityImg} alt="Community icon" />
        <h2 className={styles.title}>Managed by Community</h2>
        <p>
          PembRock’s community is at the driver’s seat of further PembRock
          Finance development and evolution.
        </p>
      </div>
      <div className={styles.item}>
        <img width={76} height={76} src={ProfitImg} alt="Profit icon" />
        <h2 className={styles.title}>More Profits Unlocked</h2>
        <p>
          Leverage yield farming gives the opportunity to increase your stake
          with borrowed funds and as a result, gain more profits.
        </p>
      </div>
      <div className={styles.item}>
        <img width={76} height={76} src={RocketImg} alt="Rocket icon" />
        <h2 className={styles.title}>Supported by Near Foundation</h2>
        <p>
          PembRock Finance obtained grant support from Near Foundation to expand
          Near Ecosystem with new financial tools.
        </p>
      </div>
    </div>
  )
}
