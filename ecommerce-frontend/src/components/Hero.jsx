import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="container mt-4 mb-lg-5">
      <div className="row g-4">

        {}
        <div className="col-lg-3 d-none d-lg-block border-end pe-4 pt-3">
          <ul className="list-unstyled d-flex flex-column gap-3 fw-medium" style={{ fontSize: '15px' }}>
            <li><a href="#" className="text-dark text-decoration-none d-flex justify-content-between align-items-center">Woman's Fashion <i className="bi bi-chevron-right fs-6"></i></a></li>
            <li><a href="#" className="text-dark text-decoration-none d-flex justify-content-between align-items-center">Men's Fashion <i className="bi bi-chevron-right fs-6"></i></a></li>
            <li><a href="#" className="text-dark text-decoration-none">Electronics</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Home & Lifestyle</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Medicine</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Sports & Outdoor</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Baby's & Toys</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Groceries & Pets</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Health & Beauty</a></li>
          </ul>
        </div>

        {/* Right Side: Main Premium Banner Wrapper */}
        <div className="col-12 col-lg-9 pt-lg-3">
          <div
            className="text-white rounded p-4 p-md-5 overflow-hidden d-flex align-items-center"
            style={{
              minHeight: '380px',
              background: 'linear-gradient(135deg, #09090b 0%, #1e1e2f 100%)', // Rich Dark Metallic Gradient
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
            }}
          >
            <div className="row align-items-center g-4 w-100">

              {/* Left/Top Content Column */}
              <div className="col-12 col-md-6 text-center text-md-start">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                  <i className="bi bi-apple fs-2"></i>
                  <span className="text-light opacity-75 small fw-semibold">iPhone 14 Series</span>
                </div>
                <h1 className="fw-bold mb-4 display-5" style={{ letterSpacing: '1px', lineHeight: '1.2' }}>
                  Up to 10% off Voucher
                </h1>
                <Link to="/products" className="text-white text-decoration-underline fw-medium fs-6 pb-1">
                  Shop Now <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>

              {/* Right/Bottom Image Column */}
              <div className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center position-relative">
                <img
                  src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&q=80"
                  alt="iPhone Premium"
                  className="img-fluid rounded shadow"
                  style={{
                    maxHeight: '320px',
                    width: '100%',
                    maxWidth: '280px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  }}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;