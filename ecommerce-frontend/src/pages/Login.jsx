import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const { loginUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const response = await axios.post('https://ecommerce-fullstack-design-liart-tau.vercel.app/api/auth/login', formData);


      loginUser(response.data.user, response.data.token);

      alert("Login Successful!");
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid Email or Password!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-sm" style={{ width: '400px', borderRadius: '8px' }}>
        <h3 className="fw-bold text-center mb-4">Log In to Exclusive</h3>
        {error && <div className="alert alert-danger py-2">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-danger w-100 py-2 mb-3">Log In</button>
        </form>

        <p className="text-center text-muted mb-0">
          Don't have an account? <Link to="/signup" className="text-danger text-decoration-none fw-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;