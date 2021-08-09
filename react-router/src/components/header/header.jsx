import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = ({ active, onActive }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link
              className={`page0 ${active[0] ? 'active-link' : ''}`}
              to="/"
              onClick={onActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`page1 ${active[1] ? 'active-link' : ''}`}
              to="/about"
              onClick={onActive}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
