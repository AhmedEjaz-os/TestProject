import React from 'react'
import HomepageSection1 from './homepage-section1';
import HomepageSection2 from './homepage-section2';
import HomepageSection3 from './homepage-section3';
import HomepageSection4 from './homepage-section4';
import '../styles/body.scss'

function Body() {
    return (
        <div className='homepage'>
            <HomepageSection1 />
            <HomepageSection2 />
            <HomepageSection3 />
            <HomepageSection4 />
            <div className='homepage-section-5'></div>
            <div className='homepage-section-6'></div>
        </div>
    )
}

export default Body