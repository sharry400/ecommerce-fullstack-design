import React from 'react';

const Services = () => {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="row text-center g-4 justify-content-center">

        {}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', border: '10px solid #cbd5e1' }}>
            <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
              <i className="bi bi-truck fs-3"></i>
            </div>
          </div>
          <h6 className="fw-bold text-uppercase mb-1">Free and Fast Delivery</h6>
          <p className="text-muted" style={{ fontSize: '13px' }}>Free delivery for all orders over $140</p>
        </div>

        {}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', border: '10px solid #cbd5e1' }}>
            <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
              <i className="bi bi-headset fs-3"></i>
            </div>
          </div>
          <h6 className="fw-bold text-uppercase mb-1">24/7 Customer Service</h6>
          <p className="text-muted" style={{ fontSize: '13px' }}>Friendly 24/7 customer support</p>
        </div>

        {}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', border: '10px solid #cbd5e1' }}>
            <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
              <i className="bi bi-shield-check fs-3"></i>
            </div>
          </div>
          <h6 className="fw-bold text-uppercase mb-1">Money Back Guarantee</h6>
          <p className="text-muted" style={{ fontSize: '13px' }}>We return money within 30 days</p>
        </div>

      </div>
    </div>
  );
};

export default Services;