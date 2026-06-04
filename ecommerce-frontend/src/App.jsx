import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import { AuthProvider, AuthContext } from './context/AuthContext'; 

// Components & Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute'; // Admin waala guard

// 1. PRIVATE ROUTE GUARD (Sirf logged-in users ke liye)
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-danger" role="status"></div>
      </div>
    );
  }
  // Agar user nahi hai, toh pehle login page par bhejo
  return user ? children : <Navigate to="/login" replace />;
};

// 2. PUBLIC ROUTE GUARD (Logged-in user ko wapas login/signup par jaane se rokne ke liye)
const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return null;
  // Agar user pehle se hai, toh usay direct Home (/) par bhejo
  return !user ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            
            {/* PROTECTED ROUTES: In sab ke liye pehle Login lazmi hai */}
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><ProductListing /></PrivateRoute>} />
            <Route path="/product-details/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            
            {/* ADMIN ROUTE: Login bhi ho aur Admin status bhi true ho */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } />

            {/* PUBLIC ROUTES: Login ke baad yeh pages access nahi honge */}
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

            {/* Fuzool ya galat URL par wapas home par redirect karne ke liye */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;