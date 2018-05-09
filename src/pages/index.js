import React from 'react'
import Link from 'gatsby-link'
import imgInfo_1 from '../assets/images/images_info_1.jpg'
import imgInfo_2 from '../assets/images/images_info_2.jpg'
import imgInfo_3 from '../assets/images/images_info_3.jpg'
import imgInfo_4 from '../assets/images/images_info_4.jpg'

const IndexPage = () => (
  <div>
    <div className="section__info">
      <div className="info info__text">
        <h2>Art of coffee</h2>
        <h4>deliciously gluten-free</h4>
        <p>
          Fair trade café au lait brewed, roast macchiato breve, a sit rich coffee dark. Body brewed, in, fair trade, robusta aged whipped and coffee barista aroma pumpkin spice. Half and half, plunger pot ut est brewed and milk. Robust crema single origin, mazagran redeye organic extra as half and half viennese.
        </p>
        <div className="quote">
        <blockquote>
        "It’s subtle and mild. Mild like that first splash of sun on an April Morning. This coffee is coffee the way it should be..." 
          <cite>Richard Tweak</cite>
          </blockquote>
        </div>
      </div>
      <div className="info info__image">
        <img src={ imgInfo_3 } />
      </div>
    </div>
    <div className="section__feature">
      <div className="feature__card">
        <div className="card__image">
          <img src={ imgInfo_2 } />
        </div>
        <div className="card__text">
          <h1>Plain cup of joe</h1>

        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
