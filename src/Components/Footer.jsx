import React from "react";
import "./Footer.css"; // Importing CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-address">
          <h3>India </h3>
          <p>Tamil Nadu</p>
          <p> Chennai Selaiyur Tambaram  </p> 
          <p>+91 865-100-1467</p>
          <p>jaiswal18sachin@gmail.com</p>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <a href="#">About us</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div className="footer-column">
          <a href="#">Expertise</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
        <div className="footer-column">
          <h4>Stay in the know</h4>
          <p>Subscribe to our Sellerlist</p>
          <div className="social-icons">
            <a href="#">🔗 LinkedIn</a>
            <a href="#">📸 Instagram</a>
            <a href="#">🐦 Twitter</a>
            <a href="#">📘 Facebook</a>
          </div>
          <p> A part of seller list</p>
        </div>
      </div>
      <div className="footer-back-to-top">
        <a href="#">To Top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
