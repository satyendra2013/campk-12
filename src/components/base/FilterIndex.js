import React from 'react';

const FilterIndex = () => {
  return (
    <div className='course-filter'>
      <p className='filter-text'>
        Showing <span className='text-highlight'>All</span> courses for
        <span className='text-highlight'>Grades 5-8</span>
      </p>
      <div className='dropdown-body'>
        <div className='dropdown-input'>
          <select name='drop' className='input-selector'>
            <option value='all-courses'>All Courses</option>
          </select>
        </div>
        <span className='dropdown-btn'>
          <svg
            className='dropdown-svg'
            viewBox='0 0 18 18'
            role='presentation'
            area-hidden='true'
            focusable='false'
          >
            <path
              d='m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z'
              fillRule='evenodd'
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default FilterIndex;
