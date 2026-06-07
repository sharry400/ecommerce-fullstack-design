import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');

        setProducts(response.data.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      {}
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <h6 className="text-danger fw-bold m-0">Our Products</h6>
      </div>
      <h2 className="fw-bold mb-4">Explore Our Products</h2>

      {}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
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
      )}

      {}
      <div className="text-center mt-5">
        <button className="btn btn-danger px-5 py-3 rounded-1">View All Products</button>
      </div>
    </div>
  );
};

export default ExploreProducts;