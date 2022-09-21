//Main imports
import React from 'react';
import Header from '../components/header';
import NavHeader from '../components/navHeader';
import StarBalance from '../components/starBalance';

//Style imports
import '../styles/home.css';

const home = () => {
  return (
    <div className='homeWrap'>
        <Header />
        <NavHeader />
        <StarBalance />
    </div>
  )
};

export default home