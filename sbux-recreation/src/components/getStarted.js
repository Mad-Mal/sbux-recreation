//Main imports
import React from 'react';

//Style imports
import '../styles/getStarted.css';
import Sbuxcard from '../images/sbux-card.png';

function getStarted() {
  return (
    <div className='getStarted_mainWrap'>
        <h3 className='getStarted_title'>LET'S GET STARTED</h3>
        <div className='getStarted_buttonsWrap'>
            <button className='PS_Button'>
                <img src={Sbuxcard} alt='green circle with starbucks card in it'></img>
                <div className='PS_Button_text'>
                    <h2>Pay in store</h2>
                    <p>Choose how you want to scan and <br/>pay to earn stars</p>
                </div>
                <span className='arrowButton'></span>
            </button>
            <button className='OA_Button'>
                <span></span>
                <div className='OA_Button_text'>
                    <h2>Order ahead</h2>
                    <p>Customize, pay and earn Stars, then head straigt to pick up</p>
                </div>
                <span className='arrowButton'></span>
            </button>
        </div>
    </div>
  )
}

export default getStarted