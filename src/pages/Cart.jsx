import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container mt-4 mb-5 min-vh-100">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">Cart</li>
        </ol>
      </nav>

      {/* Cart Table */}
      <div className="table-responsive mb-4">
        <table className="table align-middle text-center shadow-sm" style={{ minWidth: '700px' }}>
          <thead className="table-light shadow-sm" style={{ height: '60px' }}>
            <tr>
              <th scope="col" className="text-start ps-4 fw-medium border-0">Product</th>
              <th scope="col" className="fw-medium border-0">Price</th>
              <th scope="col" className="fw-medium border-0">Quantity</th>
              <th scope="col" className="fw-medium border-0">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            
            {/* Item 1 */}
            <tr style={{ height: '100px' }}>
              <td className="text-start ps-4 border-0 position-relative">
                {/* Delete Icon (Position Absolute) */}
                <span className="position-absolute bg-danger text-white rounded-circle d-flex align-items-center justify-content-center cursor-pointer" style={{ width: '20px', height: '20px', top: '35%', left: '10px', fontSize: '10px' }}>✕</span>
                <div className="d-flex align-items-center gap-3 ms-3">
                  <img src="https://via.placeholder.com/50?text=Monitor" alt="Product" className="img-fluid rounded" />
                  <span>LCD Monitor</span>
                </div>
              </td>
              <td className="border-0">$650</td>
              <td className="border-0">
                <input type="number" className="form-control text-center mx-auto" defaultValue="1" min="1" style={{ width: '70px' }} />
              </td>
              <td className="border-0">$650</td>
            </tr>

            {/* Item 2 */}
            <tr style={{ height: '100px' }}>
              <td className="text-start ps-4 border-0 position-relative">
                <span className="position-absolute bg-danger text-white rounded-circle d-flex align-items-center justify-content-center cursor-pointer" style={{ width: '20px', height: '20px', top: '35%', left: '10px', fontSize: '10px' }}>✕</span>
                <div className="d-flex align-items-center gap-3 ms-3">
                  <img src="https://via.placeholder.com/50?text=Gamepad" alt="Product" className="img-fluid rounded" />
                  <span>H1 Gamepad</span>
                </div>
              </td>
              <td className="border-0">$550</td>
              <td className="border-0">
                <input type="number" className="form-control text-center mx-auto" defaultValue="2" min="1" style={{ width: '70px' }} />
              </td>
              <td className="border-0">$1100</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Cart Actions */}
      <div className="d-flex justify-content-between mb-5">
        <Link to="/products" className="btn btn-outline-dark px-4 py-2 fw-medium">Return To Shop</Link>
        <button className="btn btn-outline-dark px-4 py-2 fw-medium">Update Cart</button>
      </div>

      {/* Lower Section: Coupon & Cart Total */}
      <div className="row g-5">
        
        {/* Left Side: Coupon */}
        <div className="col-lg-6">
          <div className="d-flex gap-3">
            <input type="text" className="form-control border-dark shadow-none" placeholder="Coupon Code" style={{ maxWidth: '300px' }} />
            <button className="btn btn-danger px-4 py-2">Apply Coupon</button>
          </div>
        </div>

        {/* Right Side: Cart Total */}
        <div className="col-lg-6 d-flex justify-content-end">
          <div className="border border-dark rounded p-4" style={{ width: '100%', maxWidth: '450px' }}>
            <h5 className="fw-bold mb-4">Cart Total</h5>
            
            <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Total:</span>
              <span className="fw-bold">$1750</span>
            </div>

            <div className="text-center">
              <button className="btn btn-danger px-5 py-2">Proceed to checkout</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;