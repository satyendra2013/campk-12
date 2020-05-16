import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const images = require.context('../../assets/page-2/bitmap/', true);

const NavbarIndex = () => {
  const history = useHistory();
  const onClick = (e) => {
    history.push('/home');
  };

  return (
    <nav className='main-navbar'>
      <div className='main-nav-left'>
        <img
          className='main-nav-logo'
          src={images('./camp-k-12-logo.png')}
          alt='CampK12 logo'
        />
        <div className='main-nav-left-link'>
          <Link to='#' className='nav-link-left'>
            ONLINE COURSES
          </Link>
          <Link to='#' className='nav-link-left'>
            OFFLINE CAMPS
          </Link>
          <Link to='#' className='nav-link-left'>
            REFER & EARN
          </Link>
        </div>
      </div>
      <div className='main-nav-right'>
        <img
          className='main-nav-icon'
          src={images('./leaderboard.png')}
          alt='leaderboad'
        />
        <button className='nav-btn-right'>Free trial</button>
        <button className='nav-btn-right' onClick={(e) => onClick(e)}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavbarIndex;
