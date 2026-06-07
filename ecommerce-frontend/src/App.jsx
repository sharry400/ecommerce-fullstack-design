import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider, AuthContext } from './context/AuthContext';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-danger" role="status"></div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

// 2. PUBLIC ROUTE GUARD (Logged-in user ko wapas login/signup par jaane se rokne ke liye)
const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return null;

  return !user ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>

            {}
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><ProductListing /></PrivateRoute>} />
            <Route path="/product-details/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />

            {}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } />

            {/* PUBLIC ROUTES: Login ke baad yeh pages access nahi honge */}
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

            {}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;