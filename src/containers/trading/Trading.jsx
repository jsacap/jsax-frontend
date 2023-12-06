import React from 'react'
import './trading.css';
import { Feature } from '../../components/'

const Trading = () => {
  return (
    <div className='jsa__jsaxtrade section__margin' id="jstrade">
      <div className="jsa__jsaxtrade-feature">
      <Feature title="Tools of the TRADE" 
      text="Logging a trade only takes a few moments, but the potential rewards far outweigh 
      the time invested. This effort distinguishes aimless trading from recognizing patterns 
      in your own trading and capitalizing on them. Success in trading relies on identifying 
      and exploiting recurring patterns to gain a competitive advantage. Our software helps 
      you identify gaps in your trading and ensures that your plan and behaviors truly give 
      you an edge in the market.
      "/>
      </div>
    <div className='jsa__jsaxtrade-heading'>
      <h1 className='gradient__text'>Advanced Analytics</h1>
      <p>Take a deep dive into your trading</p>
    </div>
    <div className='jsa__jsaxtrade-container'>
      <Feature title="Trade Insights" text="Access to personalised performance reports based 
      on your trading data Monitor essential metrics, recognize trends, and evaluate the 
      long-term effectiveness of your trading strategies. Utilize advanced analytics to 
      uncover patterns and outliers, and gain a fresh perspective on your trading performance. "/>

      <Feature title="Reflective Trade Log" text="Take control of your daily thought process with our 
      daily journal feature. You can record your pre and post-market thoughts and ideas, and 
      then review them on a weekly basis to identify correlations between your performance and 
      your trading plan. This practice empowers you to actively engage and enhance your ability 
      to recognize patterns, not only in price action but also in your own thinking process."/>

      <Feature title="Data Playground" text="Customize and apply filters to your trading 
      data to evaluate the performance of different trade scenarios. Obtain metrics and charts 
      to make adjustments accordingly. With an intuitive interface, you can easily customize 
      filters and access unique insights. Our predictive modeling uses your historical trading 
      data to forecast the potential future performance of your strategy."/>
    </div>
    </div>
  )
}

export default Trading