// Main imports
import React from 'react'

//Style imports
import '../styles/header.css'

const header = () => {

  //setting time of day for particular greeting
  let today = new Date();
  let currentTime = today.getHours();
  let greeting = 'Hi';

  //Using if else statement to determine greeting based off time of day
  if(currentTime < 12){
    greeting = 'Goodmorning'
  } else if(currentTime > 12 & currentTime < 17){
    greeting = 'Good afternoon'
  } else {
    greeting = 'Good evening'
  };

  //Setup for greeting emoji
  let greetingEmoji = String.fromCodePoint(0x1f304)

  //Using if else statement to determine greeting emoji based off greeting
  //The morning and evening unicode was to long so I usd .fromCodePoint to make sure they were read correctly
  if(greeting === 'Goodmorning'){
    greetingEmoji = String.fromCodePoint(0x1f304);
  } else if(greeting === 'Good afternoon'){
    greetingEmoji = '\u2600';
  } else {
    greetingEmoji = String.fromCodePoint(0x1F316);
  }

  return (
    <div className='mainHeaderWrap'>
      <div className='headerTitle'>
        {greeting},
        <br/>
        Mallory
        <span className='emojis'>{greetingEmoji}</span>
      </div>
    </div>
  )
}

export default header