import React from 'react';
const images = require.context('../../assets/page-2/bitmap/', true);

const Card = ({ courseData }) => {
  return (
    <div className='filter-course-container'>
      <div className='card'>
        <div className='card-image'></div>
        <div className='card-content'>
          <div className='card-title'>{courseData.title}</div>
          <div className='card-basic-info'>
            {courseData.gradInfo.map((data) => {
              return (
                <div className='card-live' key={data.id}>
                  <p className='card-live-title'>{data.name}</p>
                  <span className='card-live-sub-title'>{data.val}</span>
                </div>
              );
            })}
          </div>
          <div className='card-content-divider'></div>
          <div className='card-time-container'>
            {courseData.moreInfo.map((data) => {
              return (
                <div className='card-time-info' key={data.id}>
                  <img
                    src={images(`./${data.icon}`)}
                    alt={data.iconAltText}
                    className='card-time-info-icon'
                  />
                  <p className='card-time-info-title'>
                    <span className='text-highlight'>{data.highlightText}</span>{' '}
                    {data.title}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='card-content-divider'></div>
          <div className='card-price-container'>
            <div className='card-price-text'>
              <img
                className='card-price-icon'
                src={images(`./${courseData.priceIcon}`)}
                alt={courseData.priceAltText}
              />
              <p className='card-price-title'>
                {courseData.priceDisc}
                <span className='card-price-sub-title'>
                  {courseData.priceActual}
                </span>
              </p>
            </div>
            <div className='card-offer-text'>
              <img
                className='card-offer-icon'
                src={images(`./${courseData.offerIcon}`)}
                alt={courseData.offerAltText}
              />
              <p className='card-offer-title'>{courseData.offerText}</p>
            </div>
          </div>
          <div className='card-content-divider'></div>
          <button className='learn-more-btn'>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
