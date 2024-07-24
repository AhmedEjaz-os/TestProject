import React from 'react'
import Slider from 'react-infinite-logo-slider'
import '../styles/body.scss'

function HomepageSection3() {
    const section3Imgs = [
        {
            src: 'featured-image-1.png'
        },
        {
            src: 'featured-image-2.png'
        },
        {
            src: 'featured-image-3.png'
        },
        {
            src: 'featured-image-4.png'
        },
        {
            src: 'featured-image-5.png'
        }
    ]
    return (
        <div className='homepage-section-3 d-flex align-items-center justify-content-center'>
            <span className='homepage-section-3-title me-3 d-flex align-items-center'>
                <b>Featured</b><span>&nbsp;In</span>
            </span>
            <img className='homepage-section-3-rectangle' src="/assets/rectangle-img.png" alt="rectangle-img" />
            <div className='homepage-section-3-slider overflow-hidden d-flex align-items-center'>
                <Slider
                    width="250px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBoderColor={'#fff'}
                >
                    {
                        section3Imgs.map(({ src }, index) => {
                            return (
                                <Slider.Slide className='d-flex align-items-center' style={{ marginRight: 70 }}>
                                    <img key={index} src={`/assets/${src}`} alt={src} />
                                </Slider.Slide>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default HomepageSection3