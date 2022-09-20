//Main imports
import React from 'react';

//Style imports
import '../styles/navHeader.css';

const NavHeader = () => {

    //Setup for letterEmoji
    let letterEmoji = '\u2709';

    //Setup for location emoji using .fromCodePoint
    let locationEmoji = String.fromCodePoint(0x1F4CD);

    //Setup for history emoji using .fromCodePoint
    let historyEmoji = String.fromCodePoint(0x1F4DC)

    //Setup for account emoji
    let accountEmoji = String.fromCodePoint(0x1F9DC)

  return (
    <div className='navHeader_mainWrap'>
        <div className='navHeader_leftWrap'>
            <p className='inbox'>{letterEmoji}</p>
            <button className='inboxButton'>Inbox</button>
            <p className='location'>{locationEmoji}</p>
            <button className='locationButton'>Stores</button>
        </div>
        <div className='navHeader_rightWrap'>
            <button className='historyButton'>{historyEmoji}</button>
            <button className='accountButton'>{accountEmoji}</button>
        </div>
    </div>
  )
}

export default NavHeader