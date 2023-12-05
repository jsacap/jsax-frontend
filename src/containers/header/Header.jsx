import React from 'react'
import './header.css'
import bull from '../../assets/bull.jpg';

const Header = () => {
  return (
    <div className='jsa__header section__padding' id="home">
      <div className='jsa__header-content'>
        <h1 className='gradient__text'>JSAX TRADE</h1>
        <p>UNLOCK THE POWER OF DATA-DRIVEN INSIGHTS BUILT FOR TRADERS BY TRADERS.</p>
        <p>Enter your trading data, and let our algorithms unearth the hidden gems within. Discover opportunities, refine strategies, and elevate your trading performance.</p>
        <div className='jsa__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Start</button>
        </div>
      </div>
    <div className='jsa__header-image'>
      <img src={bull} alt='trading bull' />
    </div>
      
    </div>
  )
}

export default Header