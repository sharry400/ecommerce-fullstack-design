import React from 'react';
import { Link } from 'react-router-dom'; // Yahan Link import karna zaroori hai

const Navbar = () => {
  return (
    <header>
      {/* Top Black Bar */}
      <div className="bg-dark text-white text-center py-2" style={{ fontSize: '14px' }}>
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
        <a href="#" className="text-white ms-2 fw-bold">ShopNow</a>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold fs-4" to="/">Exclusive</Link>
          
          {/* Mobile Toggle Button */}
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links & Icons */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            
            {/* Center Links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 fw-medium">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Sign Up</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Shop</Link></li>
            </ul>

            {/* Right Side: Search & Icons */}
            <div className="d-flex align-items-center gap-3">
              {/* Search Bar */}
              <div className="input-group" style={{ width: '240px' }}>
                <input 
                  type="text" 
                  className="form-control bg-light border-0 shadow-none" 
                  placeholder="What are you looking for?" 
                  style={{ fontSize: '13px' }}
                />
                <span className="input-group-text bg-light border-0 cursor-pointer">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              
              {/* Wishlist & Cart Icons */}
              <i className="bi bi-heart fs-5" style={{ cursor: 'pointer' }}></i>
              
              {/* Cart Icon ko Link mein wrap kar diya */}
              <Link to="/cart" className="text-dark">
                <i className="bi bi-cart3 fs-5" style={{ cursor: 'pointer' }}></i>
              </Link>
            </div>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;