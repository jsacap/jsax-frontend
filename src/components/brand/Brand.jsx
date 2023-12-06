import React from 'react'
import './brand.css';
import BrandImage from '../../assets/BrandImage.jpg'

const Brand = () => {
  return (
    <div className='jsa__brand section__padding'>
      <div className='jsa__brand-img'>
        <img src={BrandImage} alt='brand'/>
      </div>
      <div className='jsa__brand-content'>
        <h4>Request Early Access!</h4>
        <h1 className='gradient__text'>Improve Your Edge</h1>
        <p>Take the leap and improve your edge now!</p>
        <h4>Request for early access</h4>
      </div>
      
    </div>
  )
}

export default Brand