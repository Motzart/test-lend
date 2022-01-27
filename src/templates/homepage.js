// library
import * as React from 'react'
import { graphql } from 'gatsby'
// components
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { MainContent } from '../components/MainContent/MainContent'

const Homepage = ({ data }) => {
  return (
    <Layout isHomepage>
      <Seo title="Home" />
      <MainContent pageContent={data.prismicHomepage} />
    </Layout>
  )
}

export const query = graphql`
  query homePageQuery($id: String, $lang: String) {
    prismicHomepage(id: { eq: $id }, lang: { eq: $lang }) {
      lang
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        banner_title {
          text
        }
      }
    }
  }
`

export default Homepage
