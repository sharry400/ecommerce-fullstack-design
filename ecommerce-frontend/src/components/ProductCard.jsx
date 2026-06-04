import React from 'react';
import { Link } from 'react-router-dom';

// Yahan brackets { } ke andar 'id' likhna zaroori hai
const ProductCard = ({ id, title, price, oldPrice, image }) => {
  return (
    <div className="card border-0 shadow-sm h-100 position-relative">
      
      {/* Discount Badge (Agar oldPrice ho tabhi dikhaye) */}
      {oldPrice && (
        <span className="badge bg-danger position-absolute top-0 start-0 m-2 px-2 py-1">
          -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
        </span>
      )}
      
      {/* Favorite & Eye Icons */}
      <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
          <i className="bi bi-heart"></i>
        </div>
        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
          <i className="bi bi-eye"></i>
        </div>
      </div>

      {/* Product Image Clickable Link */}
      <Link to={`/product-details/${id}`} className="d-flex align-items-center justify-content-center p-3 bg-light text-decoration-none" style={{ height: '180px' }}>
        <img 
          src={image} 
          alt={title} 
          className="img-fluid" 
          style={{ maxHeight: '100%', objectFit: 'contain' }}
        />
      </Link>

      <div className="card-body px-2 pb-2 pt-3">
        {/* Product Title */}
        <h6 className="card-title fw-bold text-truncate mb-1">{title}</h6>
        
        {/* Prices */}
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="text-danger fw-medium">${price}</span>
          {oldPrice && <span className="text-muted text-decoration-line-through" style={{ fontSize: '14px' }}>${oldPrice}</span>}
        </div>

        {/* Rating */}
        <div className="d-flex align-items-center gap-1 text-warning" style={{ fontSize: '14px' }}>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
          <span className="text-muted ms-1">(88)</span>
        </div>
      </div>
      
      {/* Add to Cart Button (Hover par show hota hai aam taur par, abhi static lagaya hai) */}
      <button className="btn btn-dark w-100 rounded-bottom" style={{ borderRadius: '0' }}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;