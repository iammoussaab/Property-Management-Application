import React from "react";
import "../styles/Footer.css"; // Import CSS for styling

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Property Management Inc.</p>
      <ul className="footer-links">
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
