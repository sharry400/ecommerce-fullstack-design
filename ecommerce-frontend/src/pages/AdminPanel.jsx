import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', image: '', description: '', category: '', stock: '' });
  const [loading, setLoading] = useState(true);


  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);


  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://https://ecommerce-fullstack-design-liart-tau.vercel.app/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {

        await axios.put(`http://https://ecommerce-fullstack-design-liart-tau.vercel.app/api/products/${editId}`, formData);
        alert('Product Updated Successfully!');
        setIsEditing(false);
        setEditId(null);
      } else {

        await axios.post('http://https://ecommerce-fullstack-design-liart-tau.vercel.app/api/products', formData);
        alert('Product Added Successfully!');
      }


      setFormData({ name: '', price: '', image: '', description: '', category: '', stock: '' });
      fetchProducts();
    } catch (error) {
      alert('Error saving product: ' + error.message);
    }
  };


  const handleEditSelect = (product) => {
    setIsEditing(true);
    setEditId(product._id);

    setFormData({
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      stock: product.stock
    });
  };


  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setFormData({ name: '', price: '', image: '', description: '', category: '', stock: '' });
  };


  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`https://ecommerce-fullstack-design-cq4y.vercel.app/api/products/${id}`);
        alert('Product Deleted!');
        if(editId === id) handleCancelEdit();
        fetchProducts();
      } catch (error) {
        alert('Error deleting product');
      }
    }
  };

  return (
    <div className="container mt-5 mb-5 min-vh-100">
      <h2 className="fw-bold mb-4 text-danger border-bottom pb-2">Admin Dashboard</h2>

      <div className="row g-5">
        {/* Left Column: Form (Dynamic Add/Edit) */}
        <div className="col-lg-4">
          <div className={`card p-4 shadow-sm ${isEditing ? 'border-warning' : ''}`}>
            <h5 className="fw-bold mb-3 text-dark">
              {isEditing ? '⚡ Edit Product Mode' : 'Add New Product'}
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label small mb-1">Product Name</label>
                <input type="text" className="form-control form-control-sm" value={formData.name} required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="mb-2">
                <label className="form-label small mb-1">Price ($)</label>
                <input type="number" className="form-control form-control-sm" value={formData.price} required onChange={(e) => setFormData({...formData, price: e.target.value})} />
              </div>
              <div className="mb-2">
                <label className="form-label small mb-1">Image URL</label>
                <input type="text" className="form-control form-control-sm" value={formData.image} required onChange={(e) => setFormData({...formData, image: e.target.value})} />
              </div>
              <div className="mb-2">
                <label className="form-label small mb-1">Category</label>
                <select className="form-select form-select-sm" value={formData.category} required onChange={(e) => setFormData({...formData, category: e.target.value})}>
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Pets">Pets</option>
                  <option value="Health & Beauty">Health & Beauty</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="form-label small mb-1">Stock</label>
                <input type="number" className="form-control form-control-sm" value={formData.stock} required onChange={(e) => setFormData({...formData, stock: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label small mb-1">Description</label>
                <textarea className="form-control form-control-sm" rows="3" value={formData.description} required onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
              </div>

              {}
              <button type="submit" className={`btn btn-sm w-100 py-2 mb-2 ${isEditing ? 'btn-warning text-dark fw-bold' : 'btn-danger'}`}>
                {isEditing ? 'Save Changes (Update)' : 'Add Product'}
              </button>

              {isEditing && (
                <button type="button" className="btn btn-sm btn-outline-secondary w-100 py-1" onClick={handleCancelEdit}>
                  Cancel Edit
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Right Column: Products List Table with Edit Option */}
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
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p._id} className={editId === p._id ? 'table-warning' : ''}>
                        <td><img src={p.image} alt={p.name} style={{ width: '35px', height: '35px', objectFit: 'contain' }} /></td>
                        <td className="text-start text-truncate" style={{ maxWidth: '180px' }}>{p.name}</td>
                        <td><span className="badge bg-light text-dark">{p.category}</span></td>
                        <td className="fw-bold text-dark">${p.price}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            {}
                            <button className="btn btn-sm btn-outline-warning py-0 px-2 text-dark" onClick={() => handleEditSelect(p)} title="Edit Product">
                              <i className="bi bi-pencil-square"></i>
                            </button>
                            {}
                            <button className="btn btn-sm btn-outline-danger py-0 px-2" onClick={() => handleDelete(p._id)} title="Delete Product">
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
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