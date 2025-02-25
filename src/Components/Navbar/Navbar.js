import React, { useState } from "react";
import { FaPhoneAlt, FaGlobe, FaCommentDots, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <span>support@domain.com</span>
        <span>Mon to Fri: 9:00am - 6:00pm</span>
        <span>Fairview Ave, El Monte, CA 91732</span>
        <div className="icons">
          <FaGlobe className="icon" />
          <FaCommentDots className="icon" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        {/* Logo */}
        <div className="logo">
          <img src='images/logo.jpg' alt="Logo" className="logo-img" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>Inventory</li>
          <li>About</li>
          <li>News</li>
          <li>Contacts</li>
        </ul>

        {/* Contact Info */}
        <div className="contact-info">
          <FaPhoneAlt className="phone-icon" />
          <span className="phone-number">+1 755 302 8549</span>
          <button className="chat-button">Online Chat</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
