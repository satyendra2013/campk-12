import React from 'react';
const images = require.context('../../assets/page-2/bitmap/', true);

const LandingIndex = () => {
  return (
    <div className='bg-container'>
      <div className='bg-title'>ONLINE COURSES</div>
      <div className='bg-content'>
        <div className='bg-info'>
          <img
            src={images('./group-40.png')}
            alt='group-40'
            className='bg-icon'
          />
          <p className='bg-info-title'>Learn interactively.</p>
          <p className='bg-info-sub-text'>
            LIVE online sessions with our expert mentors.See a demo.
          </p>
        </div>
        <div className='bg-info'>
          <img
            src={images('./woman-copy.png')}
            alt='woman-copy'
            className='bg-icon'
          />
          <p className='bg-info-title'>Learn from anywhere.</p>
          <p className='bg-info-sub-text'>
            Convenience and safety for you and your child.
          </p>
        </div>
        <div className='bg-info'>
          <img
            src={images('./woman-copy-2.png')}
            alt='women-copy-2'
            className='bg-icon'
          />
          <p className='bg-info-title'>Learn from the pioneers.</p>
          <p className='bg-info-sub-text'>
            We’ve been teaching kids to code since 2010. Read more.
          </p>
        </div>
        <div className='bg-info'>
          <img
            src={images('./woman-copy-2_2.png')}
            alt='woman-cop-2_2'
            className='bg-icon'
          />
          <p className='bg-info-title'>Learn by doing.</p>
          <p className='bg-info-sub-text'>
            100% project-based curriculum. Solve real-world problems.
          </p>
        </div>
      </div>
      <button className='free-trial-btn'>Book A free trial</button>
    </div>
  );
};

export default LandingIndex;
