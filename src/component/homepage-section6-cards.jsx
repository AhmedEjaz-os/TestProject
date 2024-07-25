import React from 'react'
import '../styles/homepage-section6-cards.scss'

function HomepageSection6Cards({style, title, buttonTitle, src}) {
  return (
    <div className='section-6-cards col-4' style={{...style}}>
        <div className='section-6-cards-image d-flex flex-column align-items-center justify-content-center' style={{ backgroundImage: `url(/assets/${src})`}}>
            <h1 className='fw-bold text-white'>{title}</h1>
            <button className='btn'>{buttonTitle}</button>
        </div>
    </div>
  )
}

export default HomepageSection6Cards