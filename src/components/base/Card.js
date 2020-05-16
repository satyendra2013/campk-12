import React from 'react';
const images = require.context('../../assets/page-1/bitmap/', true);

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div
        className='card-image'
        style={{
          backgroundImage: `url(
            ${images(`./${data.img}`)}
          )`,
        }}
      >
        <div className='card-top-tag'>
          <p className='card-tag-text'>{data.topTag}</p>
        </div>
      </div>
      <div className='card-content'>
        <div className='card-title'>{data.title}</div>
        <div className='card-content-divider'></div>
        <div className='card-info'>
          {data.gradeInfo.map((el) => {
            return (
              <div className='card-info-text' key={el.id}>
                <div className='card-info-sub-text'>
                  <img
                    className='card-info-sub-icon'
                    src={images(`./${el.subIcon}`)}
                    alt={el.subIconText}
                  />
                  <p className='card-info-sub-title'>{el.subIconTitle}</p>
                </div>
                <p className='card-info-grade'>{el.grade}</p>
              </div>
            );
          })}
        </div>
        <div className='card-content-divider'></div>
        <div className='card-sylab-info'>
          <img
            src={images(`./${data.slybIcon}`)}
            alt={data.slybAltText}
            className='card-sylab-icon'
          />
          {data.slybText.map((el, i) => {
            return (
              <div className='card-sylab-sub-info' key={`${el.id}-${i}`}>
                <p className='card-sylab-sub-title'>{el}</p>
              </div>
            );
          })}
        </div>
        <div className='card-point-info'>
          <img
            src={images(`./${data.pointIcon}`)}
            alt={data.pointAltText}
            className='card-point-icon'
          />
          <div className='card-point-sub-info'>
            <p className='card-point-sub-title'>{data.pointNum}</p>
          </div>
        </div>
        <div className='card-content-divider'></div>
        <div className='card-time-container'>
          {data.timeInfo.map((el) => {
            return (
              <div className='card-time-info' key={el.id}>
                <img
                  src={images(`./${el.timeIcon}`)}
                  alt={el.timeAltText}
                  className='card-time-info-icon'
                />
                <p className='card-time-info-title'>{el.timeTitle}</p>
              </div>
            );
          })}
        </div>
        <div className='card-content-divider'></div>
        <div className='card-enrol-container'>
          <div className='card-price-value'>{data.price}</div>
          <button className='card-enrol-btn'>ENROLL</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
