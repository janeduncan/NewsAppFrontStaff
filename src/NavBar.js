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
                <Link to="/staff/journalists">View Journalists</Link>
                <Link to="/staff/journalists/new">Add Journalist</Link>
                <Link to="/staff/articles">View Articles</Link>
                <Link to="/staff/articles">Add Article</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default NavBar;
