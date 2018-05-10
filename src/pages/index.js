import React from 'react'
import Link from 'gatsby-link'
import Test from '../components/test'
import imgInfo_1 from '../assets/images/images_info_1.jpg'
import imgInfo_2 from '../assets/images/images_info_2.jpg'
import imgInfo_3 from '../assets/images/images_info_3.jpg'
import imgInfo_4 from '../assets/images/images_info_4.jpg'
import imgInfo_5 from '../assets/images/images_info_5.jpg'
import imgInfo_6 from '../assets/images/images_info_6.jpg'
import imgInfo_7 from '../assets/images/images_info_7.jpg'

const IndexPage = () => (
  <div>
    {/* INFO SECTION */}
    <div className="section__info">
      <div className="info info__text">
        <h2>Art of coffee</h2>
        <h4>deliciously gluten-free</h4>
        <p>
          Fair trade café au lait brewed, roast macchiato breve, a sit rich coffee dark. Body brewed, in, fair trade, robusta aged whipped and coffee barista aroma pumpkin spice. Half and half, plunger pot ut est brewed and milk. Robust crema single origin, mazagran redeye organic extra as half and half viennese.
        </p>
      </div>
      <div className="info info__image">
        <img src={ imgInfo_3 } alt="test" />
      </div>
      <div className="info info__quote">
          <blockquote>
            "It’s subtle and mild. Mild like that first splash of sun on an April Morning. This coffee is coffee... the way it should be..." 
            <cite>Richard Tweak</cite>
          </blockquote>
        </div>
    </div>
    {/* FEATURE SECTION */}
    <div className="section__feature">
      <div className="feature feature__card">
        <div className="card__header">
          <h2>Brew of the week</h2>
          <h4>come try it today</h4>
        </div>
        <div className="card card__image">
          <img src={ imgInfo_2 } />
        </div>
        <div className="card card__text">
          <h2>Plain cup of coffee</h2>
          <h4>a local favourite</h4>
          <p>A simple cup of pre-ground farm to table coffee, home-brewed fresh each morning, and left to simmer on the burner for 6 hours. It will take you back, to a simpler time.</p>
        </div>
      </div>
    </div>
    {/* GALLERY SECTION */}
    <div className="section__gallery">
      <div className="gallery gallery__header">
        <h2>Our place</h2>
        <h4>where you can feel at home</h4>
        <p>Located on that fake street from Seinfeld, this Upper-Lower-Side hot spot will make you say "Yeah, I guess I'll have a coffee?!?".</p>
      </div>
      <div className="gallery gallery__image">
        <img src={ imgInfo_4 } />
      </div>
      <div className="gallery gallery__image">
        <img src={ imgInfo_1 } />
      </div>
      <div className="gallery gallery__image">
        <img src={ imgInfo_7 } />
      </div>
    </div>
  </div>
)

export default IndexPage
