import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="heder-border">
      <div className="container-header header-inner">
        <div className="brand">
          <Link to="/">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="logo"
              width={120}
              height={64}
            />
          </Link>
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Services
          </NavLink>
          <NavLink
            to="/elearning"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            E-Learning Portal
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Products
          </NavLink>
          <NavLink to="/contact" className="btn btn-cta">
            Contact
          </NavLink>
        </nav>
      </div>
      </div>
    </header>
  );
}
