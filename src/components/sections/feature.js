import React from 'react'

// LOADING COMPONENTS
import Image from '../image'
import SectionHeader from '../sectionHeader'

// LOADING ASSETS
import imgInfo_2 from '../../assets/images/images_info_2.jpg'

const Feature = () => (
    <div id="feature">
        {/* FEATURE SECTION */}
        <div className="section__feature">
            <div className="feature feature__card">
                <SectionHeader 
                    styles={"card__header"}
                    heading={"Brew of the week"}
                    subHeading={"come try it today"}
                />
                <Image
                    styles={"card card__image"}
                    source={ [ imgInfo_2 ] }
                    alt={""}
                />
                <SectionHeader 
                    styles={"card card__text"}
                    heading={"Plain cup of coffee"}
                    subHeading={"a local favourite"}
                    paragraph={"A simple cup of pre-ground farm to table coffee, home-brewed fresh each morning, and left to simmer on the burner for 6 hours. It will take you back, to a simpler time."}
                />
            </div>
        </div>
    </div>
)

export default Feature