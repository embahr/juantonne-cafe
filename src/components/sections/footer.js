import React from 'react'
import Link from 'gatsby-link'

// LOADING COMPONENTS

const Footer = () => (
  <div id="footer">
    <div className="footer__banner">
      <h2>Stop in for a brew...</h2>
      <h4>Open daily 08:00 - 16:00</h4>
      <a className="footer__email" href="mailto:info@juantonne.com">Send us an email!</a>
      <h5 className="footer__copy">
        Copyright &copy; 2018
        <br/>
        <Link to="http://mbachurski.com/portfolio">
          Mariusz Bachurski
        </Link>
      </h5>
    </div>
  </div>
)

export default Footer