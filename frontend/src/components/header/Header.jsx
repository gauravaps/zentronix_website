import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaChevronDown, FaCube } from 'react-icons/fa';
import zentronix from './zentronix.png'
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);


  useEffect(() => {
  const handleOutsideClick = (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn')) {
      setMenuOpen(false);
    }
  };
  document.addEventListener('click', handleOutsideClick);
  return () => document.removeEventListener('click', handleOutsideClick);
}, []);


  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">

             {/* <img src="https://cdn-icons-png.flaticon.com/512/135/135620.png" alt="Logo" />  */}

             <img src={zentronix} alt="logo" /> 
          </Link>

          


        </div>

        {/* Desktop Nav Links */}
        <nav className="nav-links desktop-only">
          <Link to="/" className="nav-item">Home</Link>

          {/* Industries Mega Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Industries <FaChevronDown className="dropdown-icon" /></span>
            {dropdownOpen && (
              <div className="mega-dropdown-menu">
                <div className="mega-grid">
                  <Link to="/categories/vegetables"><FaUser className="mega-icon" /><span>Pickup & Delivery</span></Link>
                  <Link to="/categories/drinks"><FaCube className="mega-icon" /><span>Food Delivery</span></Link>
                  <Link to="/categories/fruits"><FaCube className="mega-icon" /><span>Grocery App</span></Link>
                  <Link to="/categories/ecommerce"><FaCube className="mega-icon" /><span>E-commerce</span></Link>
                  <Link to="/categories/packers"><FaCube className="mega-icon" /><span>Packers & Movers</span></Link>
                  <Link to="/categories/logistics"><FaCube className="mega-icon" /><span>Logistics Services</span></Link>
                  <Link to="/categories/demand"><FaCube className="mega-icon" /><span>On Demand</span></Link>
                  <Link to="/categories/realestate"><FaCube className="mega-icon" /><span>Real Estate</span></Link>
                  <Link to="/categories/events"><FaCube className="mega-icon" /><span>Events and Ticketing</span></Link>
                  <Link to="/categories/fitness"><FaCube className="mega-icon" /><span>Fitness App</span></Link>
                  <Link to="/categories/social"><FaCube className="mega-icon" /><span>Social Media App</span></Link>
                  <Link to="/categories/healthcare"><FaCube className="mega-icon" /><span>Health Care App</span></Link>
                </div>
              </div>
            )}
          </div>

          {/* Services Mega Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="dropdown-toggle">Our Services <FaChevronDown className="dropdown-icon" /></span>
            {servicesOpen && (
              <div className="mega-dropdown-menu">
                <div className="mega-grid">
                  <Link to="/services/mobile-app"><FaCube className="mega-icon" /><span>Mobile App Development</span></Link>
                  <Link to="/services/web-app"><FaCube className="mega-icon" /><span>Web App Development</span></Link>
                  <Link to="/services/website"><FaCube className="mega-icon" /><span>Website Development</span></Link>
                  <Link to="/services/ui-ux"><FaCube className="mega-icon" /><span>UI/UX Design</span></Link>
                  <Link to="/services/staff"><FaCube className="mega-icon" /><span>Staff Augmentation</span></Link>
                  <Link to="/services/marketing"><FaCube className="mega-icon" /><span>Digital Marketing</span></Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/pages" className="nav-item">About</Link>
          <Link to="/blog" className="nav-item">Product</Link>
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
            <Link to="/blog" className="nav-item">Product</Link>
            <Link to="/about" className="nav-item">Contact </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
