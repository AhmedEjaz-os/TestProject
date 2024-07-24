import React from 'react'
import '../styles/footer.scss'

function Footer() {
  const footerMenu = [
    {
      title: 'ABOUT MASBIA',
      menu: [
        {
          menuText: 'What We Do'
        },
        {
          menuText: 'History'
        },
        {
          menuText: 'Kosher Certifying Agency'
        },
        {
          menuText: 'Tzedakah'
        },
        {
          menuText: 'Supporters And Benefactors'
        },
        {
          menuText: 'Who We Are'
        },
        {
          menuText: 'Board'
        }
      ]
    },
    {
      title: 'GET INVOLVED',
      menu: [
        {
          menuText: 'Donation Catalog'
        },
        {
          menuText: 'Volunteer'
        },
        {
          menuText: 'Volunteer FAQ'
        },
        {
          menuText: 'Wishlist'
        }
      ]
    },
    {
      title: 'CONTACT US',
      menu: [
        {
          menuText: 'Masbia Of Flatbush'
        },
        {
          menuText: 'Masbia Of Queens'
        },
        {
          menuText: 'Masbia Boro Park'
        },
        {
          menuText: 'Corporate Office'
        }
      ]
    }
  ]
  return (
    <div className=''>
      <div className='footer d-flex align-items-center'>
        <div className='footer--column-1'>
          <img className='footer--column-1-logo' src="/assets/footer-logo.png" alt="footer-logo" />
          <p className='footer--column-1-description text-white mb-0'>
            Make Tax Deductible Donations Payable to:<br />Masbia (Tax ID: 20-1923521)<br />Mailing Address: P.O. Box 191181, Brooklyn NY, 11219<br /><br />For More Sponsorship Opportunities: Click Here<br />Masbia is a non-profit 501(c)(3)federally<br />tax-exempt charitable organization.
          </p>
        </div>
        <div className='footer--column-2 d-flex align-items-start justify-content-between w-75'>
          {
            footerMenu.map(({ title, menu }, index) => {
              return (
                <div>
                  <h1 className='text-white fw-bold' key={index}>{title}</h1>
                  {
                    menu.map(({ menuText }, index) => {
                      return <p className='text-white mb-0' key={index}>{menuText}</p>
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='footer-bottom'>
        <hr className='m-0' />
        <p className='mb-0 py-3 text-center'> © 2024 / Masbia. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer