import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const FlashSales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');

        setProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching flash sales:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5 mb-5 border-bottom pb-5">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <h6 className="text-danger fw-bold m-0">Today's</h6>
      </div>

      <div className="d-flex align-items-center mb-4">
        <h2 className="fw-bold me-5">Flash Sales</h2>
      </div>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product._id}>
            <ProductCard
              id={product._id}
              title={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-danger px-5 py-3 rounded-1">View All Products</button>
      </div>
    </div>
  );
};

export default FlashSales;