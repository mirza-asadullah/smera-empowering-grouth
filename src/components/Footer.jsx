import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="brand-inner">
            <img src="/src/assets/logo.png" alt="SMERA Logo" className="footer-logo" />
          </div>
          <div className="social-icons">
            <a href="#" className="social-btn" aria-label="Facebook">
              <img src="/src/assets/facebook.png" alt="facebook" className="social-img" />
            </a>
            <a href="#" className="social-btn" aria-label="Twitter">
              <img src="/src/assets/twitter.png" alt="twitter" className="social-img" />
            </a>
            <a href="#" className="social-btn" aria-label="Instagram">
              <img src="/src/assets/instagram.png" alt="instagram" className="social-img" />
            </a>
            <a href="#" className="social-btn" aria-label="LinkedIn">
              <img src="/src/assets/linkedin.png" alt="linkedin" className="social-img" />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
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
          <div className="subscribe-form">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email Address"
              className="subscribe-input"
            />
            <button className="subscribe-btn" aria-label="Send">
              <img src="/src/assets/searchbutton.png" alt="send" className="send-img" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-row">
            <div className="bottom-left">Copyright© 2025 SMERA. All Rights Reserved.</div>
            <div className="bottom-right">
              <a href="#">User Terms &amp; Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
