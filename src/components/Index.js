import React, { Fragment } from 'react';
import NavbarIndex from './layout/NavbarIndex';
import LandingIndex from './base/LandingIndex';
import TabIndex from './base/TabIndex';
import FilterIndex from './base/FilterIndex';
import CardIndex from './base/CardIndex';

const Index = () => {
  const courseData = {
    title: 'AI & Machine Learning: Code Intelligent Bot',
    gradInfo: [
      {
        id: '11',
        name: 'Level',
        val: '1',
      },
      {
        id: '12',
        name: 'Grades',
        val: '5 - 8',
      },
    ],
    moreInfo: [
      {
        id: '121',
        icon: 'path-copy-8.png',
        altText: 'path-copy-8',
        highlightText: '5.6k',
        title: 'Happy Students',
      },
      {
        id: '122',
        icon: 'icon_5.png',
        altText: 'icon_5',
        highlightText: '12 Hours',
        title: 'over 6 Sessions',
      },
      {
        id: '123',
        icon: 'shape-copy-9.png',
        altText: 'shape-copy-9',
        highlightText: '',
        title: 'Weekend & Weekday Batches',
      },
    ],
    priceIcon: 'rupees-icon.png',
    priceAltText: 'rupees-icon',
    priceDisc: '9999',
    priceActual: '12000',
    offerIcon: 'offers-icon.png',
    offerAltText: 'offers-icon',
    offerText: '21% off',
  };

  return (
    <Fragment>
      <header className='main-nav-container'>
        <NavbarIndex />
        <LandingIndex />
      </header>
      <div className='main'>
        <TabIndex />
        <div className='course-filter-container'>
          <FilterIndex />
          <div className='filter-course-container'>
            {Array(9)
              .fill()
              .map((el, i) => {
                return <CardIndex courseData={courseData} key={i} />;
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
