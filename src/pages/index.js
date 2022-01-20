import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { MainContent } from '../components/MainContent/MainContent'

const Homepage = () => (
  <Layout isHomepage>
    <Seo title="Home" />
    <MainContent />
  </Layout>
)

export default Homepage
