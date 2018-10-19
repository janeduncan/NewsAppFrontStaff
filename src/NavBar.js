import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <header>
      <div className="navbar-div">
        <div className="navLink">
          <Link to="/staff">Homepage</Link>
        </div>
        <div className="navLink">
          <Link to="/staff/journalists">Journalists</Link>
        </div>
        <div className="navLink">
          <Link to="/staff/articles">Articles</Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
