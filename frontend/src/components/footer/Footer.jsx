import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaGithub, FaPinterest } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLanguage } from 'react-icons/md';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import zentronix2 from './zentronix2.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Logo & Contact */}
        <div className="footer-column">
          <Link to={'/'} className="footer-logo">
            <img src={zentronix2} alt="logo" />
            
          </Link>

          <ul className="footer-contact">
            <li>
              <a href="https://www.gauravfood.com" target="_blank" rel="noopener noreferrer">
                <MdLanguage /> <span>www.Gauravfood.com</span>
              </a>
            </li>
            <li>
              <a href="mailto:help@gauravfood.com">
                <MdEmail /> <span>help@Gauravfood.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+918109107318">
                <MdPhone /> <span>+91-8109107318</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Services & Pages</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/terms">Terms And Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/return">Return Policy</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Social + App Buttons */}
        <div className="footer-column">
          <h3 className="footer-heading">Follow us on</h3>
          <ul className="footer-social">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <BsTwitterX /> <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub /> <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <FaPinterest /> <span>Pinterest</span>
              </a>
            </li>
          </ul>

          <div className="footer-apps">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/512px-Download_on_the_App_Store_RGB_blk.svg.png"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png"
              alt="Play Store"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 - 2026 Gaurav Food, LLC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
