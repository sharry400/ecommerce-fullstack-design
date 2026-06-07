const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// THE ULTIMATE FIX: Agar Vercel env variable load na kare, toh yeh direct link use kar lega
const DB_URL = process.env.MONGO_URI || "mongodb+srv://wwwsharryiqbal73_db_user:FtmIjLNjlte4zgek@cluster0.vrfofwn.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(DB_URL)
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

// VERCEL KE LIYE SAB SE ZAROORI LINE (Iske bina Vercel API ko nahi parh sakta)
module.exports = app;