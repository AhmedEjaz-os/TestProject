import React, { useState } from 'react'
import '../styles/body.scss'

function HomepageSection4() {
  const [videoStatus, setVideoStatus] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/93HEp2yS2oc?si=sqzjTRpdp85unNna"
  const video=<iframe width="736" height="523" style={{borderRadius: 20}} src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>;
  return (
    <div className='homepage-section-4 d-flex align-items-center justify-content-center'>
        <div className="homepage-section-4-left">
            <img src="/assets/section-4-icon.png" alt="section-4-icon" />
            <h1><b>Who is</b> Masbia?</h1>
            <p>Throughout the Passover season, Masbia <br /> expects to distribute 10,000 raw food packages, <br /> which will include special holiday staples for <br /> families to be able to prepare their own Seder <br /> and Kosher for Passover</p>
        </div>
        <div className="homepage-section-4-right">
              {
                videoStatus ?
                <div>
                  {video}
                </div>
                :
                <div className='homepage-section-4-right-image-container position-relative'>
                  <img src="/assets/video-image.png" alt="video-image" className='homepage-section-4-right-video-image' />
                  <img src="/assets/play-btn-icon.png" alt="play-btn-icon" onClick={() => setVideoStatus(true)} className='homepage-section-4-right-play-btn position-absolute' />
                </div>
              }
        </div>
    </div>
  )
}

export default HomepageSection4