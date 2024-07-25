import React from 'react'
import '../styles/body.scss'

function HomepageSection1() {
  return (
    <div className='homepage-section-1'>
        <img src="/assets/top-banner.png" className='homepage-section-1-top-banner' alt="top-banner" />
        <img className='homepage-section-1-top-banner-bottom' src="/assets/top-banner-bottom.png" alt="top-banner-bottom" />
        <div className='homepage-section-1-text'>
            <h1 className='homepage-section-1-text-title'>
                Help Masbia distribute <br /> kosher for Passover food.
            </h1>
            <button className='btn homepage-section-1-text-btn'>Donate Now</button>
        </div>
    </div>
  )
}

export default HomepageSection1