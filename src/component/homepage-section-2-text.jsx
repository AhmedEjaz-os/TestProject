import React from 'react'
import '../styles/homepage-section-2-text.scss'

function HomepageSection2Text({title, sideTitle,  sideDescription, style}) {
  return (
    <div className='homepage-secton2 d-flex align-items-center' style={style}>
        <h1 className='homepage-secton2-title me-1 mb-0'>{title}</h1>
        <div className='homepage-secton2-side'>
            <h1 className='homepage-secton2-side-title mb-1'>{sideTitle}</h1>
            <p className='homepage-secton2-side-des mb-0'>{sideDescription}</p>
        </div>
    </div>
  )
}

export default HomepageSection2Text