import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const BestSelling = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');

        setProducts(response.data.slice(-4).reverse());
      } catch (error) {
        console.error("Error fetching best selling:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <h6 className="text-danger fw-bold m-0">This Month</h6>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">Best Selling Products</h2>
        <button className="btn btn-danger px-4 py-2 rounded-1">View All</button>
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
    </div>
  );
};

export default BestSelling;