const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('API is running perfectly!'));
app.use(express.json());

const connectDB = async () => {
  try {
    const DB_URL = process.env.MONGO_URI || "mongodb+srv://wwwsharryiqbal73_db_user:FtmIjLNjlte4zgek@cluster0.vrfofwn.mongodb.net/ecommerce?retryWrites=true&w=majority";
    await mongoose.connect(DB_URL);
    console.log('MongoDB successfully connected for Vercel!');
  } catch (err) {
    console.log('MongoDB connection error:', err);
  }
};
connectDB();

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;