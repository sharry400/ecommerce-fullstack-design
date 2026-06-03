import React from 'react';
import ProductCard from './ProductCard'; // Wahi purana component!
import Coat from '../assets/Coat.png'
import Bag from '../assets/Bag2.png'
import cooler from '../assets/Liquid.png'

const BestSelling = () => {
  // Naye products ka data
  const bestSellingData = [
    { 
      id: 1, 
      title: "The North Coat", 
      price: 260, 
      oldPrice: 360, 
      image: Coat 
    },
    { 
      id: 2, 
      title: "Gucci Duffle Bag", 
      price: 960, 
      oldPrice: 1160, 
      image: Bag
    },
    { 
      id: 3, 
      title: "RGB Liquid Cooler", 
      price: 160, 
      oldPrice: 170, 
      image: cooler 
    },
    { 
      id: 4, 
      title: "Small BookSelf", 
      price: 360, 
      oldPrice: null, // Ispe koi purani price nahi hai
      image: "https://via.placeholder.com/150x120?text=Shelf" 
    }
  ];

  return (
    <div className="container mt-5 pt-5">
      {/* Section Header */}
      <div className="d-flex align-items-center gap-2 mb-2">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <span className="text-danger fw-bold">This Month</span>
      </div>
      
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold m-0">Best Selling Products</h2>
        <button className="btn btn-danger px-4">View All</button>
      </div>

      {/* Grid for Products */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
        {bestSellingData.map((product) => (
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
    </div>
  );
};

export default BestSelling;