import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 1. Yahan CartProvider ko import karein
import { CartProvider } from './context/CartContext'; 

// Baqi imports (Navbar, Footer, Pages waghera)...
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

const App = () => {
  return (
    // 2. Apne poore return block ko <CartProvider> se wrap kar dein
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* Footer agar hai toh yahan aayega */}
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;