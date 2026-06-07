import React from 'react';
import speaker from '../assets/Speaker.png'

const PromoBanner = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="bg-dark text-white p-4 p-md-5 rounded d-flex flex-column flex-md-row align-items-center justify-content-between">

        {}
        <div className="text-section text-center text-md-start">
          <p className="text-success fw-bold mb-3">Categories</p>
          <h1 className="display-5 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
            Enhance Your <br /> Music Experience
          </h1>

          {/* Circular Timer Bubbles */}
          <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-4 text-dark">
            <div className="bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow" style={{ width: '65px', height: '65px' }}>
              <span className="fw-bold fs-5 lh-1">23</span>
              <span style={{ fontSize: '10px', fontWeight: '500' }}>Hours</span>
            </div>
            <div className="bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow" style={{ width: '65px', height: '65px' }}>
              <span className="fw-bold fs-5 lh-1">05</span>
              <span style={{ fontSize: '10px', fontWeight: '500' }}>Days</span>
            </div>
            <div className="bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow" style={{ width: '65px', height: '65px' }}>
              <span className="fw-bold fs-5 lh-1">59</span>
              <span style={{ fontSize: '10px', fontWeight: '500' }}>Mins</span>
            </div>
            <div className="bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow" style={{ width: '65px', height: '65px' }}>
              <span className="fw-bold fs-5 lh-1">35</span>
              <span style={{ fontSize: '10px', fontWeight: '500' }}>Secs</span>
            </div>
          </div>

          <button className="btn btn-success px-4 py-2">Buy Now!</button>
        </div>

        {}
        <div className="image-section mt-5 mt-md-0 position-relative p-3">
          {}
          <div style={{ width: '80%', height: '80%', backgroundColor: 'rgba(255,255,255,0.2)', filter: 'blur(50px)' }} className="position-absolute top-50 start-50 translate-middle rounded-circle"></div>
          {/* Actual Image */}
          <img
            src = {speaker}
            alt="Promo Speaker"
            className="img-fluid position-relative z-1"
          />
        </div>

      </div>
    </div>
  );
};

export default PromoBanner;