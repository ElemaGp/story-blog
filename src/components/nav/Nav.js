import React from 'react'
import "./nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='container container__nav'>
      <nav className='nav__links'> 
        <Link to="/"  className='nav__link'>HOME</Link>
        <Link to="/create" className='nav__link'>ADD STORY</Link>
      </nav>

    </div>
  )
}

export default Nav
        