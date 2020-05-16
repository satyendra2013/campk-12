import React from 'react';
import { Link } from 'react-router-dom';

const TabIndex = (props) => {
  return (
    <div className='inverted-menu-container'>
      <div className='inverted-menu'>
        <Link to='#' className='inverted-menu-item'>
          Grades 1-4
        </Link>
        <Link to='#' className='inverted-menu-item inverted-menu-item--active'>
          Grades 5-8
        </Link>
        <Link to='#' className='inverted-menu-item'>
          Grades 9 - 12
        </Link>
      </div>
    </div>
  );
};

export default TabIndex;
