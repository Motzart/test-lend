import React from 'react'
import ListPartners from './ListPartners/ListPartners'
import nearPartner from '../../../images/MainContent/Partners/near.svg'
import refFinancePartner from '../../../images/MainContent/Partners/rf.svg'
import inc4Partner from '../../../images/MainContent/Partners/inc4.svg'

import * as styles from './Partners.module.scss'

const Partners = () => {
  const partnersList = [
    {
      icon: nearPartner,
      text: 'Near',
    },
    {
      icon: nearPartner,
      text: 'Near Foundation',
    },
    {
      icon: refFinancePartner,
      text: 'Ref.finance',
    },
    {
      icon: inc4Partner,
      text: 'INC4',
    },
  ]

  return (
    <section>
      <h2 className={styles.title_partners}>Our Partners</h2>
      <ListPartners partnersList={partnersList} />
    </section>
  )
}

export default Partners
