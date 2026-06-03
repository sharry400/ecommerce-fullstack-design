import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container mt-4">
        <div className="row g-4">
          
          {/* Column 1: Subscribe */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold mb-4">Exclusive</h4>
            <p className="mb-3 fs-5">Subscribe</p>
            <p className="mb-3 text-white-50">Get 10% off your first order</p>
            <div className="input-group mb-3" style={{ maxWidth: '250px' }}>
              <input 
                type="email" 
                className="form-control bg-dark text-white border-secondary shadow-none" 
                placeholder="Enter your email" 
              />
              <button className="btn btn-outline-secondary text-white" type="button">
                <i className="bi bi-send"></i>
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-medium mb-4">Support</h5>
            <p className="text-white-50 mb-3">111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
            <p className="text-white-50 mb-3">exclusive@gmail.com</p>
            <p className="text-white-50">+88015-88888-9999</p>
          </div>

          {/* Column 3: Account */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-medium mb-4">Account</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><a href="#" className="text-white-50 text-decoration-none">My Account</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Login / Register</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Cart</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Wishlist</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Shop</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-medium mb-4">Quick Link</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Terms Of Use</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-medium mb-4">Download App</h5>
            <p className="text-white-50 mb-2" style={{ fontSize: '12px' }}>Save $3 with App New User Only</p>
            
            <div className="d-flex align-items-center gap-2 mb-4">
              {/* QR Code Placeholder */}
              <div className="bg-light p-1" style={{ width: '80px', height: '80px' }}>
                <img src="https://via.placeholder.com/80?text=QR" alt="QR Code" className="img-fluid" />
              </div>
              {/* App Store / Play Store Placeholders */}
              <div className="d-flex flex-column gap-2">
                <img src="https://via.placeholder.com/100x30?text=Google+Play" alt="Play Store" className="img-fluid" />
                <img src="https://via.placeholder.com/100x30?text=App+Store" alt="App Store" className="img-fluid" />
              </div>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-4 fs-5 text-white">
              <i className="bi bi-facebook" style={{ cursor: 'pointer' }}></i>
              <i className="bi bi-twitter" style={{ cursor: 'pointer' }}></i>
              <i className="bi bi-instagram" style={{ cursor: 'pointer' }}></i>
              <i className="bi bi-linkedin" style={{ cursor: 'pointer' }}></i>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-top border-secondary mt-5 pt-4 pb-2 text-center text-white-50">
          <p className="mb-0"><i className="bi bi-c-circle"></i> Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;