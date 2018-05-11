import React from 'react'
import Link from 'gatsby-link'
import Hero from '../assets/images/hero_cafe.jpg'
import Hero_m from '../assets/images/hero_mobile.jpg'
import Coffee from '../components/IconCoffee'

const Welcome = ({ heading, subHeading }) => (
  <div id="welcome" className="section__welcome">
    <div className="welcome__backdrop"></div>
    <div className="welcome__header">
      <h1>{ heading }</h1>
      <h3>{ subHeading }</h3>
    </div>
    <div className="wrapper">
      <div className="decor__burst">
        <Coffee />
      </div>
    </div>
  </div>
)

export default Welcome
