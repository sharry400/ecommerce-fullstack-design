import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  // Categories ka dummy data (Icons ke naam Bootstrap icons se match karte hain)
  const categoryData = [
    { id: 1, name: 'Phones', icon: 'bi-phone' },
    { id: 2, name: 'Computers', icon: 'bi-laptop' },
    { id: 3, name: 'SmartWatch', icon: 'bi-smartwatch' },
    { id: 4, name: 'Camera', icon: 'bi-camera' },
    { id: 5, name: 'HeadPhones', icon: 'bi-headphones' },
    { id: 6, name: 'Gaming', icon: 'bi-controller' },
  ];

  return (
    <div className="container mt-5 pt-5 border-top">
      {/* Section Header */}
      <div className="d-flex align-items-center gap-2 mb-2">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <span className="text-danger fw-bold">Categories</span>
      </div>
      
      <h2 className="fw-bold mb-4">Browse By Category</h2>

      {/* Categories Grid */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
        {categoryData.map((category) => (
          <div className="col" key={category.id}>
            <CategoryCard icon={category.icon} name={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;