import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = ({ onShowAbout }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/"
              onClick={() => onShowAbout(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/about"
              onClick={() => onShowAbout(true)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
