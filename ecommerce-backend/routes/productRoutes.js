const express = require('express');
const Product = require('../models/Product');

const router = express.Router();




router.post('/seed', async (req, res) => {
    const sampleProducts = [
    { name: "HAVIT HV-G92 Gamepad", price: 120, image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&q=80", description: "Gaming controller with vibration", category: "Electronics", stock: 15 },
    { name: "AK-900 Wired Keyboard", price: 960, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80", description: "Mechanical wired gaming keyboard", category: "Electronics", stock: 10 },
    { name: "IPS LCD Gaming Monitor", price: 370, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80", description: "27 inch IPS Display, 144Hz", category: "Electronics", stock: 5 },
    { name: "S-Series Comfort Chair", price: 375, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80", description: "Ergonomic chair for long hours", category: "Furniture", stock: 20 },
    { name: "Breed Dry Dog Food", price: 100, image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=500&q=80", description: "Premium quality dog food", category: "Pets", stock: 50 },
    { name: "CANON EOS DSLR Camera", price: 360, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80", description: "High resolution camera", category: "Electronics", stock: 8 },
    { name: "ASUS FHD Gaming Laptop", price: 700, merge: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80", description: "Powerful gaming laptop", category: "Electronics", stock: 12 },
    { name: "Curology Product Set", price: 500, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80", description: "Skincare product kit", category: "Health & Beauty", stock: 25 }
  ];

  try {
    await Product.deleteMany();
    const createdProducts = await Product.insertMany(sampleProducts);
    res.status(201).json({ message: "Sample data successfully seeded!", products: createdProducts });
  } catch (error) {
    res.status(500).json({ message: "Error seeding data", error: error.message });
  }
});






router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});




router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});

module.exports = router;