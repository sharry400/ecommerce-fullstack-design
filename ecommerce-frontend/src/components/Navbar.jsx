import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    alert("Logged out successfully!");
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2 py-md-3">
      <div className="container">
        {/* Brand Logo & Toggler Row for Mobile */}
        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
          <Link className="navbar-brand fw-bold fs-3 text-dark mb-0" to="/">Exclusive</Link>

          <div className="d-flex align-items-center gap-3">
            {/* Mobile Cart Icon - SIRF AAM USER KE LIYE */}
            {(!user || !user.isAdmin) && (
              <Link to="/cart" className="position-relative text-dark text-decoration-none me-2">
                <i className="bi bi-cart3 fs-4"></i>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger text-white" style={{ fontSize: '9px', padding: '4px 6px' }}>
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
            )}

            {/* Toggler Button */}
            <button className="navbar-toggler border-0 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }}></span>
            </button>
          </div>
        </div>

        {/* Desktop Brand Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-dark d-none d-lg-block" to="/">Exclusive</Link>

        {/* Collapsible Menu Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-lg-3 fs-6 my-3 my-lg-0">
            <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/products">Shop</Link></li>
            {user && user.isAdmin && (
              <li className="nav-item">
                <Link className="nav-link text-danger fw-bold" to="/admin">Admin Panel</Link>
              </li>
            )}
          </ul>

          {/* Mobile Auth Actions inside collapse menu */}
          <div className="d-lg-none border-top pt-3 mt-2">
            {user ? (
              <div className="d-flex flex-column gap-2">
                <span className="fw-medium text-secondary">Hi, {user.name}</span>
                <button className="btn btn-sm btn-outline-dark w-100" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Link to="/login" className="btn btn-sm btn-outline-danger flex-grow-1 text-center">Login</Link>
                <Link to="/signup" className="btn btn-sm btn-danger text-white flex-grow-1 text-center">Sign Up</Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Side Icons & Auth Status */}
        <div className="d-none d-lg-flex align-items-center gap-4">

          {/* Desktop Cart Icon - SIRF AAM USER KE LIYE */}
          {(!user || !user.isAdmin) && (
            <Link to="/cart" className="position-relative text-dark text-decoration-none">
              <i className="bi bi-cart3 fs-4"></i>
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger text-white" style={{ fontSize: '10px' }}>
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
          )}

          {user ? (
            <div className="d-flex align-items-center gap-3">
              <span className="fw-medium text-secondary">Hi, {user.name}</span>
              <button className="btn btn-sm btn-outline-dark" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-sm btn-outline-danger">Login</Link>
              <Link to="/signup" className="btn btn-sm btn-danger text-white">Sign Up</Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;