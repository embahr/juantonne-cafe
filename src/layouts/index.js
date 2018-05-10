import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'
import Welcome from '../components/welcome'
import '../styles/styles.css'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Menu />
    <Welcome siteTitle={data.site.siteMetadata.title} />
    
    {children()}
    
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
