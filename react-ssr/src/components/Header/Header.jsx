import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
