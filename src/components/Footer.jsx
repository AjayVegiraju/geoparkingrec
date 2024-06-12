// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <div className="footer-address">
            <i className="fas fa-map-marker-alt"></i>
            <span>800 Bellevue Way NE, Suite #500,<br />Bellevue, WA 98004, U.S.A.</span>
          </div>
        </div>
        <div className="footer-center">
          <p>&copy; {new Date().getFullYear()} GeoParking Technologies, Inc. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/GeoParking/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@GeoParkingTech" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/geoparkingtech" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/geoparkingtech" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/GeoParkingTech" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
