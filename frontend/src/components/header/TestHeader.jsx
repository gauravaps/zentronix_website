import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars } from 'react-icons/fa';
import { FaChevronDown } from "react-icons/fa"
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/135/135620.png" alt="Logo" />
          </Link>
          <div className="logo-text">
            <Link to="/" className="logo-link">
              <span className="logo-fresh">fresh</span>
              <br />
              <span className="logo-food">FOOD</span>
            </Link>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="nav-links desktop-only">
          <Link to="/" className="nav-item">Home</Link>

          {/* Industries Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Industries <FaChevronDown className="dropdown-icon" /> </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/categories/vegetables">Pickup & Delivery</Link>
                <Link to="/categories/drinks">Food Delivery</Link>
                <Link to="/categories/fruits">Grocery App</Link>
                <Link to="/categories/ecommerce">E-commerce</Link>
                <Link to="/categories/packers">Packers & Movers</Link>
                <Link to="/categories/logistics">Logistics Services</Link>
                <Link to="/categories/demand">On Demand</Link>
                <Link to="/categories/realestate">Real Estate</Link>
                <Link to="/categories/events">Events and Ticketing</Link>
                <Link to="/categories/fitness">Fitness App</Link>
                <Link to="/categories/social">Social Media App</Link>
                <Link to="/categories/healthcare">Health Care App</Link>
              </div>
            )}
          </div>

          {/* Our Services Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="dropdown-toggle">Our Services <FaChevronDown className="dropdown-icon" /></span>
            {servicesOpen && (
              <div className="dropdown-menu">
                <Link to="/services/mobile-app">Mobile App Development</Link>
                <Link to="/services/web-app">Web App Development</Link>
                <Link to="/services/website">Website Development</Link>
                <Link to="/services/ui-ux">UI/UX Design</Link>
                <Link to="/services/staff">Staff Augmentation</Link>
                <Link to="/services/marketing">Digital Marketing</Link>
              </div>
            )}
          </div>

          <Link to="/pages" className="nav-item">About</Link>
          <Link to="/blog" className="nav-item">Blog</Link>
          <Link to="/about" className="nav-item">Contact</Link>
        </nav>

        {/* Desktop User Icon */}
        <div className="icons desktop-only">
          <Link to="/register" className="icon-circle">
            <FaUser />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn mobile-only">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>

        {/* Mobile User Icon */}
        <div className="mobile-user mobile-only">
          <Link to="/register" className="icon-circle">
            <FaUser />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu mobile-only">
          <nav>
            <Link to="/" className="nav-item">Home</Link>

            <details>
              <summary>Industries</summary>
              <div className="mobile-dropdown">
                <Link to="/categories/vegetables">Pickup & Delivery</Link>
                <Link to="/categories/drinks">Food Delivery</Link>
                <Link to="/categories/fruits">Grocery App</Link>
                <Link to="/categories/ecommerce">E-commerce</Link>
                <Link to="/categories/packers">Packers & Movers</Link>
                <Link to="/categories/logistics">Logistics Services</Link>
                <Link to="/categories/demand">On Demand</Link>
                <Link to="/categories/realestate">Real Estate</Link>
                <Link to="/categories/events">Events and Ticketing</Link>
                <Link to="/categories/fitness">Fitness App</Link>
                <Link to="/categories/social">Social Media App</Link>
                <Link to="/categories/healthcare">Health Care App</Link>
              </div>
            </details>

            <details>
              <summary>Our Services</summary>
              <div className="mobile-dropdown">
                <Link to="/services/mobile-app">Mobile App Development</Link>
                <Link to="/services/web-app">Web App Development</Link>
                <Link to="/services/website">Website Development</Link>
                <Link to="/services/ui-ux">UI/UX Design</Link>
                <Link to="/services/staff">Staff Augmentation</Link>
                <Link to="/services/marketing">Digital Marketing</Link>
              </div>
            </details>

            <Link to="/pages" className="nav-item">About</Link>
            <Link to="/blog" className="nav-item">Blog</Link>
            <Link to="/about" className="nav-item">Contact </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
