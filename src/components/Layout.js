import * as React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'
import './../styles/reset.scss'
import './../styles/common.scss'

export const Layout = ({ isHomepage, children, navigation }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    {children}
    <Footer />
  </>
)
