import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaBars,
  FaChevronDown,
  FaCube,
  FaBriefcaseMedical,
  FaCartPlus,
  FaTachometerAlt,
  FaPhotoVideo,
  FaCode,
  FaSignOutAlt
} from 'react-icons/fa';
import { FaTruckPlane, FaArrowsDownToPeople } from "react-icons/fa6";
import { BsFillBuildingsFill, BsFillTicketPerforatedFill, BsPciCardSound } from "react-icons/bs";
import { GiForkKnifeSpoon, GiShop, GiAutoRepair, GiConvergenceTarget } from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";
import { MdInstallMobile } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiCodesignal } from "react-icons/si";
import { TbTruckDelivery, TbScooterElectric, TbDeviceMobileCode } from "react-icons/tb";
import { useAuth } from '../context/AuthContext';

import zentronix2 from './zentronix2.png';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { user ,setUser} = useAuth();

  console.log('kya hai iske andar =' , user);
  


  const [loggedUser, setLoggedUser] = useState(null); // { name, image, role, id }
  const navigate = useNavigate();

  useEffect(() => {
    // Load user info from localStorage on mount and on storage events (optional)
    const loadUser = () => {
      try {
        const userStr = localStorage.getItem('user');
        const userName = localStorage.getItem('userName');
        const userImage = localStorage.getItem('userImage');

        if (userStr) {
          // if you stored full user object as JSON string
          const userObj = JSON.parse(userStr);
          setLoggedUser({
            name: userName || userObj.firstName || userObj.name || '',
            image: userImage || userObj.image || '',
            role: userObj.role || localStorage.getItem('role') || ''
          });
        } else if (userName || userImage) {
          setLoggedUser({
            name: userName || '',
            image: userImage || '',
            role: localStorage.getItem('role') || ''
          });
        } else {
          setLoggedUser(null);
        }
      } catch (err) {
        console.error('Error parsing user from localStorage', err);
        setLoggedUser(null);
      }
    };

    loadUser();

    // Optional: update on storage change (if user logs in/out in another tab)
    const onStorage = (e) => {
      if (e.key === 'user' || e.key === 'userName' || e.key === 'userImage' || e.key === 'role' || e.key === 'token') {
        loadUser();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleLogout = () => {
    // Clear only auth-related items (or clear all if you prefer)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('userImage');
    localStorage.removeItem('userName');
    setUser('')

    setLoggedUser(null);
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={zentronix2} alt="logo" />
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
                  <Link to="/Pickup_Delivery"><FaCube className="mega-icon" /><span>Pickup & Delivery</span></Link>
                  <Link to="/food-delivery"><GiForkKnifeSpoon className="mega-icon" /><span>Food Delivery</span></Link>
                  <Link to="/Grocery_App"><GiShop className="mega-icon" /><span>Grocery App</span></Link>
                  <Link to="/Ecommerce"><FaCartPlus className="mega-icon" /><span>E-commerce</span></Link>
                  <Link to="/Packer_Movers"><TbTruckDelivery className="mega-icon" /><span>Packers & Movers</span></Link>
                  <Link to="/Logistics_Services"><FaTruckPlane className="mega-icon" /><span>Logistics Services</span></Link>
                  <Link to="/on_demand"><FaTachometerAlt className="mega-icon" /><span>On Demand</span></Link>
                  <Link to="/real_state"><BsFillBuildingsFill className="mega-icon" /><span>Real Estate</span></Link>
                  <Link to="/Events_Ticketing"><BsFillTicketPerforatedFill className="mega-icon" /><span>Events and Ticketing</span></Link>
                  <Link to="/Fitness_App"><IoMdFitness className="mega-icon" /><span>Fitness App</span></Link>
                  <Link to="/Social_MediaApp"><FaPhotoVideo className="mega-icon" /><span>Social Media App</span></Link>
                  <Link to="/Health_CareApp"><FaBriefcaseMedical className="mega-icon" /><span>Health Care App</span></Link>
                  <Link to="/Home_Services"><GiAutoRepair className="mega-icon" /><span>Home Services</span></Link>
                  <Link to="/Taxi_Dispatch"><GiConvergenceTarget className="mega-icon" /><span>Taxi Dispatch</span></Link>
                  <Link to="/E-Scooter"><TbScooterElectric className="mega-icon" /><span>e-Scooter App</span></Link>
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
                  <Link to="/MobileApp_Development"><MdInstallMobile className="mega-icon" /><span>Mobile App Development</span></Link>
                  <Link to="/WebApp_Development"><FaCode className="mega-icon" /><span>Web App Development</span></Link>
                  <Link to="/Website_Development"><CgWebsite className="mega-icon" /><span>Website Development</span></Link>
                  <Link to="/UI-UX_Design"><SiCodesignal className="mega-icon" /><span>UI/UX Design</span></Link>
                  <Link to="/logo_design"><FaArrowsDownToPeople className="mega-icon" /><span>Logo Designing</span></Link>
                  <Link to="/Digital_Marketing"><BsPciCardSound className="mega-icon" /><span>Digital Marketing</span></Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about_us" className="nav-item">About</Link>
          <Link to="/product" className="nav-item">Product</Link>
          <Link to="/contact-us" style={{border: "2px solid #ff6600",
            borderRadius: "6px",
             padding: "6px 12px",
             color: "#ff6600",
              textDecoration: "none" 
          }} className="nav-item">Contact</Link>
        </nav>

        {/* Desktop User Area */}
        <div className="icons desktop-only">
          {user ? (
            <div className="user-area">
              <Link to="/userprofile" className="user-info-link" title="Profile">
                {user.image ? (
                  <img src={user.image} alt="user" className="user-image" />
                ) : (
                  <div className="user-icon-fallback"><FaUser /></div>
                )}
                <span className="user-name">{user.firstName || 'User'}</span>
              </Link>

              <button className="logout-btn" onClick={handleLogout} title="Logout">
                <FaSignOutAlt /> <span className="logout-text">Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="icon-circle">
              <FaUser />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn mobile-only">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars style={{ color: 'white' }} />
          </button>
        </div>

        {/* Mobile User Icon */}
        <div className="mobile-user mobile-only">
          {user ? (
            <div className="mobile-user-inline">
              <Link to="/userprofile" className="icon-circle">
                {user.image ? <img src={user.image} alt="user" className="user-image-mobile" /> : <FaUser />}
              </Link>
            </div>
          ) : (
            <Link to="/login" className="icon-circle">
              <FaUser />
            </Link>
          )}
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
                <Link to="/Pickup_Delivery">Pickup & Delivery</Link>
                <Link to="/food-delivery">Food Delivery</Link>
                <Link to="/Grocery_App">Grocery App</Link>
                <Link to="/Ecommerce">E-commerce</Link>
                <Link to="/Packer_Movers">Packers & Movers</Link>
                <Link to="/Logistics_Services">Logistics Services</Link>
                <Link to="/on_demand">On Demand</Link>
                <Link to="/real_state">Real Estate</Link>
                <Link to="/Events_Ticketing">Events and Ticketing</Link>
                <Link to="/Fitness_App">Fitness App</Link>
                <Link to="/Social_MediaApp">Social Media App</Link>
                <Link to="/Health_CareApp">Health Care App</Link>
                <Link to="/Home_Services">Home Services</Link>
                 <Link to="/Taxi_Dispatch">taxi Dispatch</Link>
                  <Link to="/E-Scooter">e-Scooter App</Link>



              </div>
            </details>

            <details>
              <summary>Our Services</summary>
              <div className="mobile-dropdown">
                <Link to="/MobileApp_Development">Mobile App Development</Link>
                <Link to="/WebApp_Development">Web App Development</Link>
                <Link to="/Website_Development">Website Development</Link>
                <Link to="/UI-UX_Design">UI/UX Design</Link>
                <Link to="/logo_design">Logo Designing</Link>
                <Link to="/Digital_Marketing">Digital Marketing</Link>
              </div>
            </details>

            <Link to="/about_us" className="nav-item">About</Link>
            <Link to="/product" className="nav-item">Product</Link>
            <Link to="/contact-us" className="nav-item">Contact </Link>

            {/* Show logout in mobile menu too */}
            {user && (
              <div className="mobile-logout-row">
                <button onClick={handleLogout} className="mobile-logout-btn"><FaSignOutAlt /> Logout</button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;