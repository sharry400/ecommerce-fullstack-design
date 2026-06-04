const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// ==========================================
// SEED API: Database mein sample data dalne ke liye
// ==========================================
router.post('/seed', async (req, res) => {
    const sampleProducts = [
    { name: "HAVIT HV-G92 Gamepad", price: 120, image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400&q=80", description: "Gaming controller with vibration", category: "Electronics", stock: 15 },
    { name: "AK-900 Wired Keyboard", price: 960, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80", description: "Mechanical wired gaming keyboard", category: "Electronics", stock: 10 },
    { name: "IPS LCD Gaming Monitor", price: 370, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80", description: "27 inch IPS Display, 144Hz", category: "Electronics", stock: 5 },
    { name: "S-Series Comfort Chair", price: 375, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80", description: "Ergonomic chair for long hours", category: "Furniture", stock: 20 },
    { name: "Breed Dry Dog Food", price: 100, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80", description: "Premium quality dog food", category: "Pets", stock: 50 },
    { name: "CANON EOS DSLR Camera", price: 360, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", description: "High resolution camera", category: "Electronics", stock: 8 },
    { name: "ASUS FHD Gaming Laptop", price: 700, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80", description: "Powerful gaming laptop", category: "Electronics", stock: 12 },
    { name: "Curology Product Set", price: 500, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80", description: "Skincare product kit", category: "Health & Beauty", stock: 25 }
  ];

  try {
    await Product.deleteMany(); // Purana data clean karne ke liye
    const createdProducts = await Product.insertMany(sampleProducts);
    res.status(201).json({ message: "Sample data successfully seeded!", products: createdProducts });
  } catch (error) {
    res.status(500).json({ message: "Error seeding data", error: error.message });
  }
});

// ==========================================
// CRUD APIs
// ==========================================

// 1. CREATE: Naya product add karne ke liye (POST)
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
});

// 2. READ ALL: Saare products mangwane ke liye (GET)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// 3. READ SINGLE: Kisi ek product ki details mangwane ke liye (GET by ID)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// 4. UPDATE: Kisi product ko edit karne ke liye (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});

// 5. DELETE: Kisi product ko delete karne ke liye (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});

module.exports = router;