import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-fullstack-design-cq4y.vercel.app/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());


    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-4 mb-5 min-vh-100">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">Products</li>
        </ol>
      </nav>

      <div className="row">
        {/* Sidebar for Filters */}
        <div className="col-lg-3 d-none d-lg-block pe-4">
          <h5 className="fw-bold mb-3">Category</h5>
          <ul className="list-unstyled text-muted gap-2 d-flex flex-column mb-4">
            <li style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('')}>
              <input type="radio" name="category" className="form-check-input me-2" defaultChecked={selectedCategory === ''} /> All Products
            </li>
            <li style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('Electronics')}>
              <input type="radio" name="category" className="form-check-input me-2" checked={selectedCategory === 'Electronics'} readOnly /> Electronics
            </li>
            <li style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('Furniture')}>
              <input type="radio" name="category" className="form-check-input me-2" checked={selectedCategory === 'Furniture'} readOnly /> Furniture
            </li>
            <li style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('Pets')}>
              <input type="radio" name="category" className="form-check-input me-2" checked={selectedCategory === 'Pets'} readOnly /> Pets
            </li>
            <li style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('Health & Beauty')}>
              <input type="radio" name="category" className="form-check-input me-2" checked={selectedCategory === 'Health & Beauty'} readOnly /> Health & Beauty
            </li>
          </ul>
        </div>

        {}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold m-0">All Products</h4>

            {/* Search Bar Input */}
            <div className="input-group" style={{ width: '300px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="input-group-text bg-danger text-white"><i className="bi bi-search"></i></span>
            </div>
          </div>

          {loading ? (
            <div className="text-center mt-5">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4">
              {/* Ab hum direct 'products' ki jagah 'filteredProducts' par map laga rahe hain */}
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="col" key={product._id}>
                    <ProductCard
                      id={product._id}
                      title={product.name}
                      price={product.price}
                      image={product.image}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 mt-4 text-center text-muted">
                  <h5>No products found matching "{searchQuery}"</h5>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;