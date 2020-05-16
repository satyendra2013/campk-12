import React from 'react';
const images = require.context('../../assets/page-1/bitmap/', true);

const LandingHome = () => {
  return (
    <div className='header-heading'>
      <div className='header-text'>
        <div className='heading-primary'>
          <p>Welcome to the</p>
          <span>school of the future.</span>
        </div>
        <p className='heading-secondary'>
          Cutting-edge technology courses for Ages 8 - 18.
          <br />
          Unlock
          <span className='heading-secondary__highlight'>
            21st century skills
          </span>
          , earn
          <img
            className='heading-secondary__icon'
            src={images('./camp-k-12-coins-copy-2.png')}
            alt='coins'
          />
          , and build
          <br />a college-ready portfolio as you learn.
        </p>
      </div>
      <div className='header-image-container'>
        <img
          className='header-image'
          src={images('./header-photo.png')}
          alt='header photo'
        />
      </div>
    </div>
  );
};

export default LandingHome;
