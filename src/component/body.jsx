import React from 'react'
import HomepageSection2Text from './homepage-section-2-text';
import Slider from 'react-infinite-logo-slider'
import '../styles/body.scss'

function Body() {
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
        <div className='homepage'>
            <div className='homepage-section-1'>
                <img src="/assets/top-banner.png" alt="top-banner" />
                <img className='homepage-section-1-top-banner-bottom' src="/assets/top-banner-bottom.png" alt="top-banner-bottom" />
                <div className='homepage-section-1-text'>
                    <h1 className='homepage-section-1-text-title'>
                        Help Masbia distribute <br /> kosher for Passover food.
                    </h1>
                    <button className='btn homepage-section-1-text-btn'>Donate Now</button>
                </div>
            </div>
            <div className='homepage-section-2 d-flex align-items-center justify-content-center'>
                <HomepageSection2Text title={'15k+'} sideTitle={'People'} sideDescription={'Prevention of Cruelty'} style={{ marginRight: 70 }} />
                <HomepageSection2Text title={'150+'} sideTitle={'Society'} sideDescription={'Direct relief'} style={{ marginRight: 70 }} />
                <HomepageSection2Text title={'49k+'} sideTitle={'Project'} sideDescription={'Research hospital'} />
            </div>
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
                                        <img key={index} src={`/assets/${src}`} alt={src}  />
                                    </Slider.Slide>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className='homepage-section-4'></div>
            <div className='homepage-section-5'></div>
            <div className='homepage-section-6'></div>
        </div>
    )
}

export default Body