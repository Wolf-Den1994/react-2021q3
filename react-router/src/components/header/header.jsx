import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">
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
