import React from 'react';
import { Link } from 'react-router-dom';

// Props receive kar rahe hain
const ProductCard = ({ title, price, oldPrice, discount, image }) => {
  return (
    <div className="card h-100 border-0 shadow-sm position-relative group">
      
      {/* Discount Badge (Sirf tab dikhega jab discount pass kiya jayega) */}
      {discount && (
        <span className="badge bg-danger position-absolute top-0 start-0 m-2 px-2 py-1" style={{ fontSize: '10px' }}>
          -{discount}%
        </span>
      )}
      
      {/* Product Image */}
      <div className="d-flex align-items-center justify-content-center p-3 bg-light" style={{ height: '180px' }}>
        {/* Product Image ko Link mein wrap kiya */}
      <Link to="/product-details" className="d-flex align-items-center justify-content-center p-3 bg-light text-decoration-none" style={{ height: '180px' }}>
        <img 
          src={image} 
          alt={title} 
          className="img-fluid" 
          style={{ maxHeight: '100%', objectFit: 'contain' }}
        />
      </Link>
      </div>

      {/* Card Body */}
      <div className="card-body px-2">
        <h6 className="card-title text-truncate fw-medium">{title}</h6>
        <div className="d-flex gap-2">
          <span className="text-danger fw-bold">${price}</span>
          {/* Purani price sirf tab dikhegi jab mojood hogi */}
          {oldPrice && <span className="text-muted text-decoration-line-through">${oldPrice}</span>}
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;