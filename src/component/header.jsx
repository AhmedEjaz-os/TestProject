import React from 'react'
import '../styles/header.scss'

function Header() {
  return (
    <div className='header d-flex align-items-center justify-content-between'>
        <div className='header-left header-link'>
            <button className='header-link-1 bg-white border-0 me-4 px-0' disabled><a href="#" className='text-decoration-none text-grey'>About Masbia</a></button>
            <button className='header-link-2 bg-white border-0 me-4 px-0'><a href="#" className='text-decoration-none text-dark'>Get Involved</a></button>
            <button className='header-link-3 bg-white border-0 me-4 px-0'><a href="#" className='text-decoration-none text-dark'>Get Food</a></button>
            <button className='header-link-4 bg-white border-0 me-4 px-0'><a href="#" className='text-decoration-none text-dark'>Events And Campaigns</a></button>
            <button className='header-link-5 bg-white border-0 px-0'><a href="#" className='text-decoration-none text-dark'>Media</a></button>
        </div>
        <div className='header-right'>
            <img className='header-right-logo' src="/assets/logo.png" alt="LOGO" />
        </div>
        <div className='header-right d-flex align-items-center'>
            <div className='header-right-buttons d-flex'>
                <button className='btn header-right-buttons-1 d-flex align-items-center'><img className='me-1' src="/assets/donate-btn-icon.svg" alt="Donate-btn-icon" />Donate</button>
                <button className='btn header-right-buttons-2 d-flex align-items-center'><img className='me-1' src="/assets/volunteer-btn-icon.svg" alt="Volunteer-btn-icon" />Volunteer</button>
                <button className='btn header-right-buttons-3 d-flex align-items-center'><img className='me-1' src="/assets/store-btn-icon.svg" alt="Store-btn-icon" />Store</button>
            </div>
            <div className='header-right-buttons-circle d-flex'>
                <button className='btn rounded-circle header-right-buttons-circle-1 d-flex align-items-center justify-content-center'><img src="/assets/search-icon.png" alt="search-icon" /></button>
                <button className='btn rounded-circle header-right-buttons-circle-2 d-flex align-items-center justify-content-center'><img src="/assets/user-icon.svg" alt="user-icon" /></button>
            </div>
        </div>
    </div>
  )
}

export default Header