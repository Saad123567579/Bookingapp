import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Booking.com</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Policies</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Diversity & Inclusion</li>
            <li>Accessibility</li>
            <li>Partners</li>
            <li>Invite friends</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Host</h4>
          <ul>
            <li>Host your home</li>
            <li>Host an experience</li>
            <li>Responsible hosting</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Cancelation options</li>
            <li>Neighborhood support</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Booking.com. All rights reserved</p>
        <ul>
          <li>Privacy & Cookies</li>
          <li>Terms & Conditions</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
