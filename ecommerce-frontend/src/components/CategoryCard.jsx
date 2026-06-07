import React from 'react';

const CategoryCard = ({ icon, name }) => {
  return (
    <div className="card text-center border shadow-sm py-4" style={{ cursor: 'pointer' }}>
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        {}
        <i className={`bi ${icon} mb-3`} style={{ fontSize: '40px' }}></i>
        <h6 className="card-title fw-medium m-0">{name}</h6>
      </div>
    </div>
  );
};

export default CategoryCard;