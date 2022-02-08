// library
import * as React from 'react'
// components
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
// styles
import './../styles/reset.scss'
import './../styles/common.scss'

export const Layout = ({ isHomepage, children, navigation }) => (
  <div className="wrapper">
    <Header isHomepage={isHomepage} navigation={navigation} />
    {children}
    <Footer />
  </div>
)
