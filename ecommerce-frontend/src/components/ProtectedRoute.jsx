import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);


  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-danger" role="status"></div>
      </div>
    );
  }


  if (!user || !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  // Agar user admin hai, toh usay page dekhne ki ijazat de dein
  return children;
};

export default ProtectedRoute;