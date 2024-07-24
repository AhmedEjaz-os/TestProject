import React from 'react'
import HomepageSection2Text from './homepage-section-2-text';
import '../styles/body.scss'

function HomepageSection2() {
    const section2 = [
        {
            title: '15k+',
            sideTitle: 'People',
            sideDescription: 'Prevention of Cruelty',
            style: {
                marginRight: 70
            },
        },
        {
            title: '150+',
            sideTitle: 'Society',
            sideDescription: 'Direct relief',
            style: {
                marginRight: 70
            },
        },
        {
            title: '49k+',
            sideTitle: 'Project',
            sideDescription: 'Research hospital',
        }
    ]
    return (
        <div className='homepage-section-2 d-flex align-items-center justify-content-center'>
            {
                section2.map(({ title, sideTitle, sideDescription, style }, index) => {
                    return <HomepageSection2Text title={title} sideTitle={sideTitle} sideDescription={sideDescription} style={style ? style : {}} />
                })
            }
        </div>
    )
}

export default HomepageSection2