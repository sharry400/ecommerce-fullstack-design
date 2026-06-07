const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB successfully connected!'))
  .catch((err) => console.log('MongoDB connection error:', err));


const productRoutes = require('./routes/productRoutes');


app.use('/api/products', productRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});