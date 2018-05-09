import React from 'react'
import Link from 'gatsby-link'
import Hero from '../assets/images/hero_cafe.jpg'
import Coffee from '../components/IconCoffee'

const Welcome = ({ siteTitle }) => (
  <div className="section__welcome">
    <div className="welcome__header">
      <h1>{ siteTitle }</h1>
      <p>Locally sourced, artisan coffee.</p>
    </div>
    <div className="wrapper">
      <div className="decor__burst"><Coffee /></div>
    </div>
  </div>
)

export default Welcome
