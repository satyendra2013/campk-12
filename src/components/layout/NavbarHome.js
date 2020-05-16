import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const images = require.context('../../assets/page-1/bitmap/', true);

const NavbarHome = () => {
  const history = useHistory();
  const onClick = (e) => {
    history.push('/');
  };
  return (
    <div className='header-navigation'>
      <img
        className='header-logo'
        src={images('./camp-k-12-logo.png')}
        alt='CampK12 logo'
        onClick={(e) => onClick(e)}
      />
      <ul className='navbar'>
        <li className='navbar__item'>
          <Link to='/' className='navbar__link'>
            <img
              src={images('./leaderboard.png')}
              className='navbar__icon'
              alt='leaderboard'
            />
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='#' className='navbar__link'>
            <img
              src={images('./group-36.png')}
              className='navbar__icon'
              alt='leaderboard'
            />
            <span className='navbar__notification'>2</span>
          </Link>
        </li>
        <li className='navbar__item'>
          <div className='navbar__item__combine'>
            <div className='navbar__item__score'>
              <img
                src={images('./skill-icon.png')}
                alt='skill-icon'
                className='navbar__item__img'
              />
              <span className='navbar__item__skill-score'>100</span>
            </div>
            <Link to='#' className='navbar__link'>
              <img
                src={images('./user.jpg')}
                alt='skill-icon'
                className='navbar__item__user-img'
              />
            </Link>
          </div>
        </li>
        <li className='navbar__item'>
          <Link to='#' className='navbar__link'>
            <img
              src={images('./shape.png')}
              className='navbar__drop-icon'
              alt='dropdown'
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHome;
