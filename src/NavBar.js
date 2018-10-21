import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <header>
      <div className="banner">
        <div className="bannerLink">
          <div className="nav">
          <div className="dropdown">
              <button className="dropbtn">MENU</button>
              <div className="dropdown-content">
                <Link to="/staff">Home</Link>
                <Link to=".">SGNN</Link>
                <Link to="/staff/journalists">Journalists</Link>
                <Link to="/staff/articles">Articles</Link>
                <Link to="/staff">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default NavBar;
