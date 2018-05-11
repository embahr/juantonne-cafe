import React from 'react'

// LOADING COMPONENTS
import Image from '../image'
import Quote from '../quote'
import SectionHeader from '../sectionHeader'

// LOADING ASSETS
import imgInfo_3 from '../../assets/images/images_info_3.jpg'

const Info = () => (
    <div id="info" >
        {/* INFO SECTION */}
        <div className="section__info">
            <SectionHeader 
                styles={"info info__text"}
                heading={"Art of coffee"}
                subHeading={"deliciously gluten-free"}
                paragraph={"Fair trade café au lait brewed, roast macchiato breve, a sit rich coffee dark. Body brewed, in, fair trade, robusta aged whipped and coffee barista aroma pumpkin spice. Half and half, plunger pot ut est brewed and milk. Robust crema single origin, mazagran redeye organic extra as half and half viennese."}
            />
            <Image 
                styles={"info info__image"}
                source={ imgInfo_3 }
                alt={"test"}
            />
            <Quote 
                styles={"info info__quote"}
                quote={'"It’s subtle and mild. Mild like that first splash of sun on an April Morning. This coffee is coffee... the way it should be..."'}
                cite={"Richard Tweak"}
            />
        </div>
    </div>
)

export default Info