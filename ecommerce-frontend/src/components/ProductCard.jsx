import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = (props) => {
  const { addToCart } = useContext(CartContext);

  // Schema mismatch se bachne ke liye fallback logic lagaya hai
  const id = props.id || props._id;
  const title = props.title || props.name;
  const price = props.price;
  const image = props.image;

  return (
    <div className="card h-100 border-0 shadow-sm position-relative product-card" style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
      
      {/* 1. Image Container wrapped in Link for Product Click Action */}
      <Link to={`/product-details/${id}`} className="text-decoration-none">
        <div 
          className="position-relative d-flex align-items-center justify-content-center p-3" 
          style={{ 
            height: '230px', 
            backgroundColor: '#ffffff', 
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <img 
            src={image} 
            alt={title} 
            style={{ 
              maxHeight: '100%', 
              maxWidth: '100%', 
              objectFit: 'contain'
            }} 
          />
        </div>
      </Link>

      {/* Wishlist and View Icons (Top Right Overlays) */}
      <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-2" style={{ zIndex: 2 }}>
        <button className="btn btn-sm rounded-circle shadow-sm p-0 d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', backgroundColor: '#fff', border: '1px solid #eee' }}>
          <i className="bi bi-heart text-dark fs-6"></i>
        </button>
        <Link to={`/product-details/${id}`} className="btn btn-sm rounded-circle shadow-sm p-0 d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', backgroundColor: '#fff', border: '1px solid #eee' }}>
          <i className="bi bi-eye text-dark fs-6"></i>
        </Link>
      </div>

      {/* 2. Product Details Section */}
      <div className="card-body p-3 d-flex flex-column justify-content-between bg-white border-top border-light">
        <div>
          {/* Title also wrapped in Link for Click Action */}
          <Link to={`/product-details/${id}`} className="text-decoration-none text-dark">
            <h6 className="fw-bold text-dark text-truncate mb-1 fs-6" title={title} style={{ cursor: 'pointer' }}>
              {title}
            </h6>
          </Link>
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="text-danger fw-bold fs-5">${price}</span>
          </div>
          
          {/* Ratings */}
          <div className="d-flex align-items-center gap-1 text-warning small mb-3">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <span className="text-muted ms-1" style={{ fontSize: '12px' }}>(88)</span>
          </div>
        </div>

        {/* 3. Add to Cart Button */}
        <button 
          className="btn btn-dark w-100 py-2 fw-medium d-flex align-items-center justify-content-center gap-2" 
          style={{ borderRadius: '4px', backgroundColor: '#111', border: 'none', fontSize: '14px' }}
          onClick={() => addToCart({ _id: id, name: title, price, image })}
        >
          <i className="bi bi-cart3"></i> Add To Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;