import React from 'react'
import HomepageSection6Cards from './homepage-section6-cards'
import '../styles/body.scss'

function HomepageSection6() {
    const section6cards = [
        {
            title: 'Passover',
            buttonTitle: 'View Campaign',
            src: 'section-6-card-1-bg.jpg'
        },
        {
            title: 'Summer',
            buttonTitle: 'View Campaign',
            src: 'section-6-card-2-bg.jpg'
        },
        {
            title: 'Winter',
            buttonTitle: 'View Campaign',
            src: 'section-6-card-3-bg.jpg'
        },
        {
            title: 'Passover',
            buttonTitle: 'View Campaign',
            src: 'section-6-card-1-bg.jpg'
        },
        {
            title: 'Summer',
            buttonTitle: 'View Campaign',
            src: 'section-6-card-2-bg.jpg'
        },
        {
            title: 'Winter',
            buttonTitle: 'View Campaign',
            src: 'section-6-card-3-bg.jpg'
        }
    ]

    return (
        <div className='homepage-section-6 d-flex align-items-center justify-content-center flex-column'>
            <img src="/assets/section-6-icon.png" alt="section-6-icon" />
            <h1 className='mb-3 homepage-section-6-title'><b>Recent</b> Campaigns</h1>
            <div className='d-flex flex-wrap align-items-center justify-content-between col-12'>
                {
                    section6cards.map(({ title, buttonTitle, src }, index) => {
                        return <HomepageSection6Cards style={(index >= (Math.floor(section6cards.length / 2))) ? {marginTop: 20} : {marginTop: 0}} title={title} buttonTitle={buttonTitle} src={src} key={index} />
                    })
                }
            </div>
            <button className='homepage-section-6-view-all btn text-uppercase'>view all</button>
        </div>
    )
}

export default HomepageSection6