//Main imports
import React from 'react'

//Style imports
import '../styles/starBalance.css';

const starBalance = () => {

    //Setup for star emoji
    let star = '\u2b50'

    //Setup for star progression bar

    
  return (
    <div className='starBalance_mainWrap'>
        <div className='starBalanceForUser'>
            <p className='numberOfStars'>0</p>
            <p>{star}</p>
        </div>
        <div className='starBalanceTitle'>
          <p>Star balance</p>
        </div>
        <div className='greenTickMarker'>
        </div>
        <div className='rewardsBar'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <div className='rewardBarLabels'>
          <p className='firstLabel'>25</p>
          <p className='secondLabel'>50</p>
          <p className='thirdLabel'>150</p>
          <p>200</p>
          <p>400</p>
        </div>
        <div className='detailsButtonWrap'>
            <button className='detailsButton'>Details</button>
        </div>
    </div>
  )
}

export default starBalance