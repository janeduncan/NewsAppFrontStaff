import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <header>
      <ul>
        <li className="navLink">
          <Link to="/staff">Homepage</Link>
        </li>
        <li className="navLink">
          <Link to="/staff/journalists">Journalists</Link>
        </li>
        <li className="navLink">
          <Link to="/staff/articles">Articles</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
