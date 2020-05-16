import React from 'react';
const images = require.context('../../assets/page-1/bitmap/', true);

const Slider = ({ sliderData }) => {
  return (
    <div className='slider-container'>
      <h2 className='slider-heading'>What do you want to learn?</h2>
      <div className='slider-content'>
        <div className='slider-btn-container'>
          <button className='slider-previous-btn'>
            <img src={images('./shape_3.png')} alt='shape_3' />
          </button>
        </div>
        <div className='slider-card-container'>
          {sliderData.map((data) => {
            return (
              <div className='slider-card' key={data.id}>
                <img
                  className='slider-icon'
                  src={images(`./${data.icon}`)}
                  alt={data.iconAltText}
                />
                <div className='slider-card-text-container'>
                  <p className='slider-card-text'>{data.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='slider-btn-container'>
          <button className='slider-next-btn'>
            <img src={images('./shape_2.png')} alt='shape_2' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
