import React from 'react';
import ProductCard from './ProductCard';
import img from '../assets/Gamepad.png'
import keyboard from '../assets/Keyboard.png'
import Computer from '../assets/Computer.png'
import Chair from '../assets/Chair.png'

const FlashSales = () => {
  const productsData = [
    { 
      id: 1, 
      title: "HAVIT HV-G92 Gamepad", 
      price: 120, 
      oldPrice: 160, 
      discount: 40,
      image: img
    },
    { 
      id: 2, 
      title: "AK-900 Wired Keyboard", 
      price: 960, 
      oldPrice: 1160, 
      discount: 35,
      image: keyboard 
    },
    { 
      id: 3, 
      title: "IPS LCD Gaming Monitor", 
      price: 370, 
      oldPrice: 400, 
      discount: 30,
      image: Computer 
    },
    { 
      id: 4, 
      title: "S-Series Comfort Chair", 
      price: 375, 
      oldPrice: 400, 
      discount: 25,
      image: Chair
    }
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center gap-2 mb-2">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <span className="text-danger fw-bold">Today's</span>
      </div>
      
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold">Flash Sales</h2>
      </div>

      {/* DYNAMIC LOOP */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
        {productsData.map((product) => (
          <div className="col" key={product.id}>
            {/* Props pass kar rahe hain components mein */}
            <ProductCard 
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              image={product.image}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FlashSales;