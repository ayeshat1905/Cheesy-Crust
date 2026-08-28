import React from "react";
import "./style.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column contact-column">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>
              1247/Plot No. 39, 15th Phase,
              <br />
              Colony, Kkatpally, Hyderabad
            </p>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div className="contact-text">
              <p>+91 987-654-3210</p>
      
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-text">
              <p>info@example.com</p>
   
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h3>Our Links</h3>
          <a href="/">Home</a>
          <a href="/menu">Menus</a>
          <a href="/about-us">About us</a>
          {/* <a href="#">Team</a>
          <a href="#">Blog</a> */}
        </div>

        <div className="footer-column">
          <h3>Help Centre</h3>
          <a href="/faq">FAQ</a>
          {/* <a href="#">Shop</a>
          <a href="#">Category Filter</a>
          <a href="#">Testimonials</a> */}
          <a href="/contact">Contact Us</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <span>Cheesy Crust</span>. All Rights Reserved.
        </p>
      </div>

      <div className="peanuts">
        <img
          src="https://swigo-fast-food-react.netlify.app/assets/pic6-RNTjax7_.png"
          alt=""
        />
      </div>

      <div className="tomatoes">
        <img
          src="https://swigo-fast-food-react.netlify.app/assets/pic5-MDm9nc9d.png"
          alt=""
        />
      </div>

    </footer>
  );
};

export default Footer;