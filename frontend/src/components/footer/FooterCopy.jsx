import React from 'react';
import './Footer.css';
import { FaFacebookF,  FaInstagram,FaGithub ,FaPinterest  } from 'react-icons/fa';
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
          <Link to={'/'}  > 
          <div className="footer-logo">
            <img
              src={zentronix2}
              alt="logo"
            />
            <div className="footer-brand">Fresh Food</div>
            
          </div>
          </Link>
          <ul className="footer-contact">
            <li><MdLanguage /> <span>www.Gauravfood.com</span></li>
         l<li><MdEmail /> <span>help@Gauravfood.com</span></li>
            <li><MdPhone /> <span>+91-8109107318</span></li>
          </ul>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Services & Pages</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>Categories</li>
            <li>Blog</li>
            <li>Terms And Conditions</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Column 3: Social + App Buttons */}
        <div className="footer-column">
          <h3 className="footer-heading">Follow us on</h3>
          <ul className="footer-social">
            <li><FaFacebookF /> <span>Facebook</span></li>
            <li><BsTwitterX /> <span>Twitter</span></li>
            <li><FaInstagram /> <span>Instagram</span></li>
            <li><FaLinkedin /> <span>linkedin</span></li>
            <li><FaGithub /> <span>Github</span></li>
            <li><FaPinterest /> <span> pinterest</span></li>

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