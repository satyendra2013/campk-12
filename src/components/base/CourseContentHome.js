import React from 'react';
const images = require.context('../../assets/page-1/bitmap/', true);

const CourseContentHome = () => {
  return (
    <div className='course-container'>
      <div className='course-content'>
        <div className='course-heading'>
          <h3 className='course-heading-primary'>Upcoming online courses</h3>
          <div className='course-live-box'>
            <p className='course-live-text'>
              <span className='circle'></span>LIVE
            </p>
          </div>
        </div>
        <p className='course-sub-text'>
          Learn from live teachers, not pre-recorded videos, in our intelligent
          virtual classNamerooms.
        </p>
        <div className='course-heading-secondary'>
          <p className='course-secondary-text'>
            <img
              className='text-icon'
              src={images('./shield-3.png')}
              alt='group-3'
            />
            = 21st century skills you’ll unlock
          </p>
          <p className='course-secondary-text'>
            <img
              className='text-icon'
              src={images('./camp-k-12-coins-copy-2.png')}
              alt='group-3'
            />
            = coins you’ll earn for completion
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseContentHome;
