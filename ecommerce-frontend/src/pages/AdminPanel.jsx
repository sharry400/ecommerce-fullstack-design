import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', image: '', description: '', category: '', stock: '' });
  const [loading, setLoading] = useState(true);

  // Saare products load karne ka function
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Naya Product Add karne ka function (CREATE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', formData);
      alert('Product Added Successfully!');
      setFormData({ name: '', price: '', image: '', description: '', category: '', stock: '' }); // Form clear kiya
      fetchProducts(); // List refresh ki
    } catch (error) {
      alert('Error adding product: ' + error.message);
    }
  };

  // Product Delete karne ka function (DELETE)
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        alert('Product Deleted!');
        fetchProducts(); // List refresh ki
      } catch (error) {
        alert('Error deleting product');
      }
    }
  };

  return (
    <div className="container mt-5 mb-5 min-vh-100">
      <h2 className="fw-bold mb-4 text-danger border-bottom pb-2">Admin Dashboard</h2>
      
      <div className="row g-5">
        {/* Left Column: Add Product Form */}
        <div className="col-lg-4">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Add New Product</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label small">Product Name</label>
                <input type="text" className="form-control form-control-sm" value={formData.name} required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="mb-2">
                <label className="form-label small">Price ($)</label>
                <input type="number" className="form-control form-control-sm" value={formData.price} required onChange={(e) => setFormData({...formData, price: e.target.value})} />
              </div>
              <div className="mb-2">
                <label className="form-label small">Image URL</label>
                <input type="text" className="form-control form-control-sm" value={formData.image} required onChange={(e) => setFormData({...formData, image: e.target.value})} />
              </div>
              <div className="mb-2">
                <label className="form-label small">Category</label>
                <select className="form-select form-select-sm" value={formData.category} required onChange={(e) => setFormData({...formData, category: e.target.value})}>
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Pets">Pets</option>
                  <option value="Health & Beauty">Health & Beauty</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="form-label small">Stock</label>
                <input type="number" className="form-control form-control-sm" value={formData.stock} required onChange={(e) => setFormData({...formData, stock: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label small">Description</label>
                <textarea className="form-control form-control-sm" rows="3" value={formData.description} required onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn btn-sm btn-danger w-100 py-2">Add Product</button>
            </form>
          </div>
        </div>

        {/* Right Column: Products List Table */}
        <div className="col-lg-8">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Manage Products ({products.length})</h5>
            {loading ? (
              <div className="spinner-border text-danger" role="status"></div>
            ) : (
              <div className="table-responsive" style={{ maxHeight: '500px' }}>
                <table className="table table-sm align-middle text-center">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th className="text-start">Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p._id}>
                        <td><img src={p.image} alt={p.name} style={{ width: '35px', height: '35px', objectFit: 'contain' }} /></td>
                        <td className="text-start text-truncate" style={{ maxWidth: '180px' }}>{p.name}</td>
                        <td><span className="badge bg-light text-dark">{p.category}</span></td>
                        <td className="fw-medium">${p.price}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger py-0 px-2" onClick={() => handleDelete(p._id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;