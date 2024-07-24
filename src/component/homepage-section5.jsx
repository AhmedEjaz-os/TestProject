import React from 'react'
import '../styles/body.scss'

function HomepageSection5() {
  return (
    <div className='homepage-section-5 d-flex align-items-center justify-content-center flex-column'>
        <img src="/assets/section-4-icon.png" alt="section-4-icon" />
        <h1><b>Get</b> Involved</h1>
        <p className='text-center'>Throughout the Passover season, Masbia expects to distribute 10,000 raw food <br /> packages, which will include special holiday staples for families to be able to <br /> prepare their own Seder and Kosher for Passover </p>
        <div className='homepage-section-5-btn-container'>
          <button className='btn text-uppercase me-4 homepage-section-5-btn-container-btn-1'>Donate</button>
          <button className='btn text-uppercase homepage-section-5-btn-container-btn-2'>Get Food</button>
        </div>
    </div>
  )
}

export default HomepageSection5