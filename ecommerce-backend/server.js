const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Express app initialize
const app = express();

// Middlewares
app.use(cors()); // Cross-Origin Resource Sharing enable karna
app.use(express.json()); // JSON data ko parse karne ke liye

// Basic Route banayen (Check karne ke liye ke server chal raha hai)
app.get('/', (req, res) => {
  res.send('E-commerce Backend Server is Running Perfectly!');
});

// Port define karein (agar .env mein PORT nahi hai toh 5000 use karega)
const PORT = process.env.PORT || 5000;

// Server ko start karein
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});