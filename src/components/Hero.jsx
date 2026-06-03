import React from 'react';
import iphoneImg from '../assets/IPhone.png';

const Hero = () => {
  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        
        {/* Left Side: Categories Sidebar */}
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

        {/* Right Side: Main Black Banner */}
        <div className="col-lg-9 ps-lg-5 pt-3">
          <div className="bg-dark text-white d-flex flex-column flex-md-row align-items-center justify-content-between px-5 py-4" style={{ height: '350px' }}>
            
            {/* Banner Text Area */}
            <div className="banner-text">
              <div className="d-flex align-items-center gap-3 mb-3">
                <i className="bi bi-apple fs-2"></i>
                <span style={{ fontSize: '14px' }}>iPhone 14 Series</span>
              </div>
              <h1 className="display-5 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
                Up to 10% <br /> off Voucher
              </h1>
              <a href="#" className="text-white text-decoration-none d-inline-flex align-items-center gap-2 pb-1 border-bottom border-light">
                Shop Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* Banner Image Area */}
            <div className="banner-image mt-4 mt-md-0 text-center">
               {/* Yahan par hum abhi placeholder text rakh rahe hain. 
                   Aap assets folder se real image yahan lagayenge. */}
              <div className="text-muted d-flex align-items-center justify-content-center" style={{ width: '250px', height: '250px', border: '1px dashed gray' }}>
                 <img 
                 src={iphoneImg} 
                 alt="iPhone banner" 
                className="img-fluid" // Bootstrap class responsive banane ke liye
                style={{ maxHeight: '350px' }} // Height control karne ke liye 
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