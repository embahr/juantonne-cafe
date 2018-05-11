import React from 'react'
import Link from 'gatsby-link'

// IMPORTING SECTIONS
import Info from "../components/sections/info"
import Feature from "../components/sections/feature"
import Gallery from "../components/sections/gallery"
import Footer from "../components/sections/footer"

const IndexPage = () => (
  <div>
    <Info />
    <Feature />
    <Gallery />
    <Footer />
  </div>
)

export default IndexPage
