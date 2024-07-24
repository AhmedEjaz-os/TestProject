import React from 'react'
import HomepageSection1 from './homepage-section1';
import HomepageSection2 from './homepage-section2';
import HomepageSection3 from './homepage-section3';
import HomepageSection4 from './homepage-section4';
import HomepageSection5 from './homepage-section5';
import HomepageSection6 from './homepage-section6';

function Body() {
    return (
        <div className='homepage'>
            <HomepageSection1 />
            <HomepageSection2 />
            <HomepageSection3 />
            <HomepageSection4 />
            <HomepageSection5 />
            <HomepageSection6 />
        </div>
    )
}

export default Body