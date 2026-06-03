import React from 'react';
import ProductCard from './ProductCard'; // Wahi same component use kar rahe hain!

const ExploreProducts = () => {
  // 8 naye products ka data
  const exploreData = [
    { id: 1, title: "Breed Dry Dog Food", price: 100, image: "https://via.placeholder.com/150x120?text=Dog+Food" },
    { id: 2, title: "CANON EOS DSLR Camera", price: 360, image: "https://via.placeholder.com/150x120?text=Camera" },
    { id: 3, title: "ASUS FHD Gaming Laptop", price: 700, image: "https://via.placeholder.com/150x120?text=Laptop" },
    { id: 4, title: "Curology Product Set", price: 500, image: "https://via.placeholder.com/150x120?text=Curology" },
    { id: 5, title: "Kids Electric Car", price: 960, image: "https://via.placeholder.com/150x120?text=Car" },
    { id: 6, title: "Jr. Zoom Soccer Cleats", price: 1160, image: "https://via.placeholder.com/150x120?text=Shoes" },
    { id: 7, title: "GP11 Shooter USB Gamepad", price: 660, image: "https://via.placeholder.com/150x120?text=Gamepad" },
    { id: 8, title: "Quilted Satin Jacket", price: 660, image: "https://via.placeholder.com/150x120?text=Jacket" }
  ];

  return (
    <div className="container mt-5 pt-5">
      {/* Section Header */}
      <div className="d-flex align-items-center gap-2 mb-2">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <span className="text-danger fw-bold">Our Products</span>
      </div>
      
      <h2 className="fw-bold mb-4">Explore Our Products</h2>

      {/* Grid for 8 Products */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {exploreData.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard 
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-5">
        <button className="btn btn-danger px-5 py-2">View All Products</button>
      </div>
    </div>
  );
};

export default ExploreProducts;