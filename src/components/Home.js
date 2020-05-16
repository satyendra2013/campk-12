import React, { Fragment } from 'react';
import NavbarHome from './layout/NavbarHome';
import LandingHome from './base/LandingHome';
import Slider from './base/Slider';
import CourseContentHome from './base/CourseContentHome';
import Card from './base/Card';
import Footer from './layout/Footer';

const Home = () => {
  const cardData = [
    {
      id: '11',
      img: 'android.png',
      topTag: 'Mobile Apps',
      title: 'App Development Level 1',
      gradeInfo: [
        {
          id: '1111',
          subIcon: 'fill-1.png',
          subIconText: 'fill-1',
          subIconTitle: 'Grades',
          grade: '4 - 8',
        },
        {
          id: '1112',
          subIcon: 'fill-1.png',
          subIconText: 'fill-1',
          subIconTitle: 'Pre-Req',
          grade: 'Yes',
        },
      ],

      slybIcon: 'skill-icon.png',
      slybAltText: 'Skill-icon',
      slybText: ['Android', 'UI/UX', '+4'],
      pointIcon: 'camp-k-12-coins-copy-2.png',
      pointAltText: 'camp-k-12-coins-copy-2.png',
      pointNum: '+1000',
      timeInfo: [
        {
          id: '1121',
          timeIcon: 'combined-shape.png',
          timeAltText: 'combined-shape',
          timeTitle: '17th Feb (in 4 days)',
        },
        {
          id: '1122',
          timeIcon: 'icon_5.png',
          timeAltText: 'card-time-info-icon',
          timeTitle: 'Mon, Tue & Wed',
        },
        {
          id: '1123',
          timeIcon: 'icon.png',
          timeAltText: 'card-time-info-icon',
          timeTitle: '6:00PM to 7:00PM',
        },
      ],

      price: 'Rs. 6,000',
    },
    {
      id: '22',
      img: 'web-development.jpg',
      topTag: 'Web Development',
      title: 'Web Development Level 1',
      gradeInfo: [
        {
          id: '1211',
          subIcon: 'fill-1.png',
          subIconText: 'fill-1',
          subIconTitle: 'Grades',
          grade: '4 - 12',
        },
        {
          id: '1212',
          subIcon: 'fill-1.png',
          subIconText: 'fill-1',
          subIconTitle: 'Pre-Req',
          grade: 'No',
        },
      ],

      slybIcon: 'skill-icon.png',
      slybAltText: 'Skill-icon',
      slybText: ['HTML', 'CSS', '+1'],
      pointIcon: 'camp-k-12-coins-copy-2.png',
      pointAltText: 'camp-k-12-coins-copy-2.png',
      pointNum: '+1000',
      timeInfo: [
        {
          id: '1221',
          timeIcon: 'combined-shape.png',
          timeAltText: 'combined-shape',
          timeTitle: '17th Feb (in 4 days)',
        },
        {
          id: '1222',
          timeIcon: 'icon_5.png',
          timeAltText: 'card-time-info-icon',
          timeTitle: 'Mon, Tue & Wed',
        },
        {
          id: '1223',
          timeIcon: 'icon.png',
          timeAltText: 'card-time-info-icon',
          timeTitle: '6:00PM to 7:00PM',
        },
      ],

      price: 'Rs. 6,000',
    },
    {
      id: '33',
      img: 'virtual-reality.jpg',
      topTag: 'Mixed Reality',
      title: 'Virtual Reality Level 1',
      gradeInfo: [
        {
          id: '1311',
          subIcon: 'fill-1.png',
          subIconText: 'fill-1',
          subIconTitle: 'Grades',
          grade: '5 - 12',
        },
        {
          id: '1312',
          subIcon: 'fill-1.png',
          subIconText: 'fill-1',
          subIconTitle: 'Pre-Req',
          grade: 'Yes',
        },
      ],
      slybIcon: 'skill-icon.png',
      slybAltText: 'Skill-icon',
      slybText: ['VR', 'Javascript', '+4'],
      pointIcon: 'camp-k-12-coins-copy-2.png',
      pointAltText: 'camp-k-12-coins-copy-2.png',
      pointNum: '+1000',
      timeInfo: [
        {
          id: '1331',
          timeIcon: 'combined-shape.png',
          timeAltText: 'combined-shape',
          timeTitle: '17th Feb (in 4 days)',
        },
        {
          id: '1332',
          timeIcon: 'icon_5.png',
          timeAltText: 'card-time-info-icon',
          timeTitle: 'Mon, Tue & Wed',
        },
        {
          id: '1333',
          timeIcon: 'icon.png',
          timeAltText: 'card-time-info-icon',
          timeTitle: '6:00PM to 7:00PM',
        },
      ],

      price: 'Rs. 8,000',
    },
  ];

  const sliderData = [
    {
      id: '1ss1',
      icon: 'group-14.png',
      iconAltText: 'group-14',
      title: 'Web Development',
    },
    {
      id: '1ss2',
      icon: 'icon_6.png',
      iconAltText: 'icon_6',
      title: 'Mobile App Development',
    },
    {
      id: '1ss3',
      icon: 'icon_7.png',
      iconAltText: 'icon_7',
      title: 'Mixed Reality (AR/VR)',
    },
    {
      id: '1ss4',
      icon: 'group-3.png',
      iconAltText: 'group-3',
      title: 'Machine Learning (AI)',
    },
  ];

  return (
    <Fragment>
      <div className='home'>
        <header className='header'>
          <NavbarHome />
          <LandingHome />
        </header>
        <Slider sliderData={sliderData} />
        <CourseContentHome />
        <div className='course-card-container'>
          {cardData.map((data, i) => {
            return <Card key={i} data={data} />;
          })}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
