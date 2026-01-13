import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/src/assets/logo.png" alt="logo" className="logo" />
        </div>
        <nav className="nav">
          <a href="#" className="nav-link active">HOME</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="btn btn-cta">Contact</a>
        </nav>
      </div>
    </header>
  )
}
