import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  // Context se cart data aur remove function uthaya
  const { cart, removeFromCart } = useContext(CartContext);

  // Total bill calculate karne ka logic
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container mt-5 mb-5 min-vh-100">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">Cart</li>
        </ol>
      </nav>

      {/* Agar cart khali ho toh yeh message dikhaye */}
      {cart.length === 0 ? (
        <div className="text-center mt-5">
          <h3 className="mb-4">Your cart is empty</h3>
          <Link to="/products" className="btn btn-danger px-4 py-2">Continue Shopping</Link>
        </div>
      ) : (
        <div className="row g-5">
          {/* Cart Items Table */}
          <div className="col-lg-8">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          {/* Remove Item Button */}
                          <button 
                            className="btn btn-sm btn-outline-danger rounded-circle px-2" 
                            onClick={() => removeFromCart(item._id)}
                          >
                            X
                          </button>
                          <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                          <span className="text-truncate" style={{ maxWidth: '200px' }}>{item.name}</span>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <Link to="/products" className="btn btn-outline-dark px-4 py-2">Return To Shop</Link>
            </div>
          </div>

          {/* Cart Total Section */}
          <div className="col-lg-4">
            <div className="card border-2 rounded-1 p-4">
              <h5 className="card-title fw-bold mb-4">Cart Total</h5>
              <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                <span>Shipping:</span>
                <span className="text-success">Free</span>
              </div>
              <div className="d-flex justify-content-between mb-4 fw-bold">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
              <button className="btn btn-danger w-100 py-3 rounded-1">Proceed to checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;