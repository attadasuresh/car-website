import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">CarRide</h2>
          <p>Your trusted car booking service.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@carride.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 123 Main Street, City</p>
        </div>

        <div className="footer-section social-icons">
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CarRide. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
