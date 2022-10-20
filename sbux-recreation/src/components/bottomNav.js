//Main imports
import React from 'react';

//Style imports
import '../styles/bottomNav.css';

//Settup for Emojis
let homeEmoji = String.fromCodePoint(0x1f3e0)

let scanEmoji = '\u2728'

let orderEmoji = String.fromCodePoint(0x1f4f2)

let giftEmoji = String.fromCodePoint(0x1f381)

let offerEmoji = String.fromCodePoint(0x1f911)

const bottomNav = () => {
  return (
    <div className='bottomNav_wrap'>
        <button>
            <p>{homeEmoji}</p>
            <p>Home</p>
        </button>
        <button>
            <p>{scanEmoji}</p>
            <p>Scan</p>
        </button>
        <button>
            <p>{orderEmoji}</p>
            <p>Order</p>
        </button>
        <button>
            <p>{giftEmoji}</p>
            <p>Gift</p>
        </button>
        <button>
            <p>{offerEmoji}</p>
            <p>Offers</p>
        </button>
    </div>
  )
}

export default bottomNav