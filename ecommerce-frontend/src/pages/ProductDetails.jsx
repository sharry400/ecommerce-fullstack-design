import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext'; // Context Import kiya

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Cart ka data aur function nikal rahe hain
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="container mt-5"><h2>Product not found!</h2></div>;
  }

  return (
    <div className="container mt-4 mb-5 min-vh-100">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/products" className="text-decoration-none text-muted">Products</Link></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="row g-5">
        <div className="col-lg-7 d-flex gap-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-center flex-grow-1 p-4" style={{ minHeight: '400px' }}>
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-5">
          <h2 className="fw-bold mb-2">{product.name}</h2>
          <h3 className="fw-medium mb-3">${product.price}.00</h3>
          <p className="text-muted mb-4 pb-4 border-bottom">{product.description}</p>
          <p className="fw-medium mb-4">Category: <span className="text-muted">{product.category}</span></p>

          {/* Actions: Quantity & Add to Cart */}
          <div className="d-flex align-items-center gap-3 mb-5">
            <div className="input-group" style={{ width: '130px' }}>
              <button className="btn btn-outline-secondary fs-5 py-1 px-3" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
              <input type="text" className="form-control text-center fs-5 py-1" value={quantity} readOnly />
              <button className="btn btn-danger text-white fs-5 py-1 px-3" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            
            {/* Real Add to Cart Button */}
            <button 
              className="btn btn-danger px-5 py-2 fs-5 flex-grow-1"
              onClick={() => {
                addToCart(product, quantity);
                alert(`${product.name} added to cart!`);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;