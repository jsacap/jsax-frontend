import React from 'react'
import './trading.css';
import { Feature } from '../../components/'

const Trading = () => {
  return (
    <div className='jsa__jsaxtrade section__margin' id="jstrade">
      <div className="jsa__jsaxtrade-feature">
        <Feature />
      </div>
    <div className='jsa__jsaxtrade-heading'>
      <h1 className='gradient__text'>Advanced Analytics</h1>
      <p>Take a deep dive into your trading</p>
    </div>
    <div className='jsa__jsaxtrade-container'>
      <Feature />
      <Feature />
      <Feature />
    </div>
    </div>
  )
}

export default Trading