import React from 'react'

// LOADING COMPONENTS
import Image from '../image'
import SectionHeader from '../sectionHeader'

// LOADING ASSETS
import imgInfo_1 from '../../assets/images/images_info_1.jpg'
import imgInfo_4 from '../../assets/images/images_info_4.jpg'
import imgInfo_7 from '../../assets/images/images_info_7.jpg'

const Gallery = () => (
    <div id="gallery" >
    {/* GALLERY SECTION */}
        <div className="section__gallery">
            <SectionHeader 
                styles={"gallery gallery__header"}
                heading={"Our place"}
                subHeading={"where you can feel at home"}
                paragraph={"Located on that fake street from Seinfeld, this Upper-Lower-Side hot spot will make you say " + '"Yeah, I guess I' + "'ll have a coffee?!?" + '"'}
            />
            <Image 
                styles={"gallery gallery__image"}
                source={ imgInfo_4 }
                alt={""}
            />
            <Image 
                styles={"gallery gallery__image"}
                source={ imgInfo_1 }
                alt={""}
            />
            <Image 
                styles={"gallery gallery__image"}
                source={ imgInfo_7 }
                alt={""}
            />
        </div>
    </div>
)

export default Gallery