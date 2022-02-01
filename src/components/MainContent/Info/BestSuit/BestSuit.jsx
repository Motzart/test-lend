// library
import React from 'react'
// styles
import * as styles from '../../../../styles/Info/bestSuit.module.scss'
// static
import TriangleImg from '../../../../images/MainContent/triangle.svg'
import CurrencyDollarImg from '../../../../images/MainContent/currency_circle_dollar.svg'
import RefreshImg from '../../../../images/MainContent/fi_refresh_cw.svg'

export default function BestSuit() {
  return (
    <div className={styles.best_suit}>
      <h2 className={styles.title}>Сhoose what suits you best</h2>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.inner_block}>
            <img
              width={149}
              height={149}
              src={TriangleImg}
              alt="Triangle shape"
            />
            <img src={CurrencyDollarImg} alt="Currency circle dollar icon" />
            <img
              width={149}
              height={149}
              src={TriangleImg}
              className={styles.img_transform}
              alt="Triangle shape"
            />
          </div>
          <h3 className={styles.sub_title}>Invest and earn</h3>
          <p className={styles.text}>
            Borrow funds and benefit from leverage farming by getting higher
            APY.
          </p>
          <button type={'button'} className={styles.btn}>
            Use liquidity
          </button>
        </div>
        <div className={styles.block}>
          <div className={styles.inner_block}>
            <img
              width={149}
              height={149}
              src={TriangleImg}
              alt="Triangle shape"
            />
            <img src={RefreshImg} alt="Finance refresh icon" />
            <img
              width={149}
              height={149}
              src={TriangleImg}
              className={styles.img_transform}
              alt="Triangle shape"
            />
          </div>
          <h3 className={styles.sub_title}>Use additional liquidity</h3>
          <p className={styles.text}>
            Lend your tokens to other participants and earn up to 10% APY.
          </p>
          <button type={'button'} className={styles.btn}>
            Invest and earn
          </button>
        </div>
      </div>
    </div>
  )
}
