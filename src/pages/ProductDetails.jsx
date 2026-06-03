import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className="container mt-4 mb-5 min-vh-100">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/products" className="text-decoration-none text-muted">Products</Link></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">Havic HV G-92 Gamepad</li>
        </ol>
      </nav>

      <div className="row g-5">
        {/* Left Side: Product Images */}
        <div className="col-lg-7 d-flex gap-3">
          {/* Thumbnails (Side Images) */}
          <div className="d-flex flex-column gap-3">
            <div className="bg-light p-2 rounded cursor-pointer" style={{ width: '100px', height: '100px' }}>
              <img src="https://via.placeholder.com/80?text=Thumb+1" alt="thumb1" className="img-fluid mix-blend-multiply" />
            </div>
            <div className="bg-light p-2 rounded cursor-pointer" style={{ width: '100px', height: '100px' }}>
              <img src="https://via.placeholder.com/80?text=Thumb+2" alt="thumb2" className="img-fluid" />
            </div>
            <div className="bg-light p-2 rounded cursor-pointer" style={{ width: '100px', height: '100px' }}>
              <img src="https://via.placeholder.com/80?text=Thumb+3" alt="thumb3" className="img-fluid" />
            </div>
          </div>
          
          {/* Main Large Image */}
          <div className="bg-light rounded d-flex align-items-center justify-content-center flex-grow-1 p-4" style={{ minHeight: '400px' }}>
            <img src="https://via.placeholder.com/400x300?text=Main+Product+Image" alt="Main Product" className="img-fluid" />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="col-lg-5">
          <h2 className="fw-bold mb-2">Havic HV G-92 Gamepad</h2>
          
          {/* Rating & Reviews */}
          <div className="d-flex align-items-center gap-2 mb-3 text-warning">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <span className="text-muted ms-2" style={{ fontSize: '14px' }}>(150 Reviews) | <span className="text-success">In Stock</span></span>
          </div>

          <h3 className="fw-medium mb-3">$192.00</h3>
          <p className="text-muted mb-4 pb-4 border-bottom">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          {/* Colors */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="fs-5">Colours:</span>
            <div className="d-flex gap-2">
              <input type="radio" className="form-check-input bg-danger border-0" name="color" style={{ width: '20px', height: '20px', cursor: 'pointer' }} defaultChecked />
              <input type="radio" className="form-check-input bg-dark border-0" name="color" style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
            </div>
          </div>

          {/* Size */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="fs-5">Size:</span>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary px-3 py-1 rounded">XS</button>
              <button className="btn btn-outline-secondary px-3 py-1 rounded">S</button>
              <button className="btn btn-danger px-3 py-1 rounded text-white">M</button>
              <button className="btn btn-outline-secondary px-3 py-1 rounded">L</button>
              <button className="btn btn-outline-secondary px-3 py-1 rounded">XL</button>
            </div>
          </div>

          {/* Actions: Quantity & Add to Cart */}
          <div className="d-flex align-items-center gap-3 mb-5">
            <div className="input-group" style={{ width: '130px' }}>
              <button className="btn btn-outline-secondary fs-5 py-1 px-3">-</button>
              <input type="text" className="form-control text-center fs-5 py-1" defaultValue="2" readOnly />
              <button className="btn btn-danger text-white fs-5 py-1 px-3">+</button>
            </div>
            <button className="btn btn-danger px-5 py-2 fs-5 flex-grow-1">Buy Now</button>
            <button className="btn btn-outline-secondary py-2 px-3 fs-5"><i className="bi bi-heart"></i></button>
          </div>

          {/* Delivery Info Box */}
          <div className="border rounded">
            <div className="d-flex align-items-center gap-3 p-3 border-bottom">
              <i className="bi bi-truck fs-3"></i>
              <div>
                <h6 className="mb-1 fw-bold">Free Delivery</h6>
                <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 p-3">
              <i className="bi bi-arrow-repeat fs-3"></i>
              <div>
                <h6 className="mb-1 fw-bold">Return Delivery</h6>
                <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;