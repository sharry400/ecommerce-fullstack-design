const mongoose = require('mongoose');

// Product ka blueprint (Schema) define kar rahe hain
const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  stock: { 
    type: Number, 
    required: true,
    default: 0 
  }
}, { timestamps: true }); // timestamps true karne se automatically createdAt aur updatedAt save hoga

// Is schema ko export kar rahe hain taake APIs mein use kar sakein
module.exports = mongoose.model('Product', productSchema);