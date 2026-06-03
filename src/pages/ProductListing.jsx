import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  // Dummy data for listing
  const allProducts = [
    { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, image: "https://via.placeholder.com/150x120?text=Gamepad" },
    { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, image: "https://via.placeholder.com/150x120?text=Keyboard" },
    { id: 3, title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, image: "https://via.placeholder.com/150x120?text=Monitor" },
    { id: 4, title: "S-Series Comfort Chair", price: 375, oldPrice: 400, image: "https://via.placeholder.com/150x120?text=Chair" },
    { id: 5, title: "Breed Dry Dog Food", price: 100, image: "https://via.placeholder.com/150x120?text=Dog+Food" },
    { id: 6, title: "CANON EOS DSLR Camera", price: 360, image: "https://via.placeholder.com/150x120?text=Camera" },
    { id: 7, title: "ASUS FHD Gaming Laptop", price: 700, image: "https://via.placeholder.com/150x120?text=Laptop" },
    { id: 8, title: "Curology Product Set", price: 500, image: "https://via.placeholder.com/150x120?text=Curology" }
  ];

  return (
    <div className="container mt-4 mb-5 min-vh-100">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">Products</li>
        </ol>
      </nav>

      <div className="row">
        {/* Sidebar for Filters (Static) */}
        <div className="col-lg-3 d-none d-lg-block pe-4">
          <h5 className="fw-bold mb-3">Category</h5>
          <ul className="list-unstyled text-muted gap-2 d-flex flex-column mb-4">
            <li><input type="checkbox" className="form-check-input me-2"/> Electronics</li>
            <li><input type="checkbox" className="form-check-input me-2"/> Fashion</li>
            <li><input type="checkbox" className="form-check-input me-2"/> Home & Lifestyle</li>
            <li><input type="checkbox" className="form-check-input me-2"/> Medicine</li>
            <li><input type="checkbox" className="form-check-input me-2"/> Sports</li>
          </ul>

          <h5 className="fw-bold mb-3">Price</h5>
          <input type="range" className="form-range w-100 mb-2" min="0" max="1000" />
          <div className="d-flex justify-content-between text-muted" style={{ fontSize: '14px' }}>
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>

        {/* Main Product Grid */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold m-0">All Products</h4>
            <select className="form-select w-auto shadow-none">
              <option value="default">Sort by: Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4">
            {allProducts.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard 
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  image={product.image}
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-outline-danger me-2">Previous</button>
            <button className="btn btn-danger">1</button>
            <button className="btn btn-outline-danger ms-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;