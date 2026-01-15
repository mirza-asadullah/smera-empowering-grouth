import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import searchbutton from "../assets/searchbutton.png";
import { usePopup } from "./ComingSoonPopup";

export default function Footer() {
  const { openPopup } = usePopup();

  const handleSocialClick = (e) => {
    e.preventDefault();
    openPopup();
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    openPopup();
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="brand-inner">
            <img src={logo} alt="SMERA Logo" className="footer-logo" />
          </div>
          <div className="social-icons">
            <a href="#" className="social-btn" aria-label="Facebook" onClick={handleSocialClick}>
              <img src={facebook} alt="facebook" className="social-img" />
            </a>
            <a href="#" className="social-btn" aria-label="Twitter" onClick={handleSocialClick}>
              <img src={twitter} alt="twitter" className="social-img" />
            </a>
            <a href="#" className="social-btn" aria-label="Instagram" onClick={handleSocialClick}>
              <img src={instagram} alt="instagram" className="social-img" />
            </a>
            <a href="#" className="social-btn" aria-label="LinkedIn" onClick={handleSocialClick}>
              <img src={linkedin} alt="linkedin" className="social-img" />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>+92 000 0000</li>
            <li>smera@gmail.com</li>
            <li>smera.com</li>
          </ul>
        </div>

        {/* Subscribe Column */}
        <div className="footer-subscribe">
          <h4>Get the latest information</h4>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email Address"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-btn" aria-label="Send">
              <img src={searchbutton} alt="send" className="send-img" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-row">
            <div className="bottom-left">
              Copyright© 2025 SMERA. All Rights Reserved.
            </div>
            <div className="bottom-right">
              <a href="#" onClick={handleSocialClick}>User Terms &amp; Conditions</a>
              <a href="#" onClick={handleSocialClick}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

