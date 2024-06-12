// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <img src="" alt="GeoParking Logo" />
          
        </div>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><a href="#services">Services</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
