import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="heder-border">
        <div className="container-header header-inner">
          <div className="brand">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <button
            type="button"
            className="menu-toggle md:hidden mr-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/elearning"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              E-Learning Portal
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Products
            </NavLink>
            <NavLink to="/contact" className="btn btn-cta">
              Contact
            </NavLink>
          </nav>

          {/* Mobile Sidebar Overlay */}
          <div
            className={`menu-overlay ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Mobile Sidebar */}
          <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
            <div className="sidebar-header">
              <span className="sidebar-title">Menu</span>
              <button className="close-btn" onClick={() => setMenuOpen(false)}>
                ×
              </button>
            </div>
            <nav className="mobile-nav">
              <NavLink
                to="/"
                end
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                Services
              </NavLink>
              <NavLink
                to="/elearning"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                E-Learning Portal
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mobile-link btn-mobile-cta"
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
