import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='jsa__footer section__padding'>
      <div className='jsa__footer-heading'>
        <h1 className='gradient__text'>Get started</h1>
      </div>
      <div className='jsa__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='jsa__footer-links'>
        <div className='jsa__footer-links_logo'>
          <img src={logo} alt='logo2' />
          <p>Information here</p>
        </div>
        <div className='jsa__footer-links_div'>
          <h4>Links</h4>
          <p>Contact</p>
          <p>About</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
        <div className='jsa__footer-created'>
          <p>Created by JSA Capital</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer