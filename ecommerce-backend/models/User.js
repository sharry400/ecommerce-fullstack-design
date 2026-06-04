const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true // Ek email se ek hi account banega
  },
  password: { 
    type: String, 
    required: true 
  },
  isAdmin: { 
    type: Boolean, 
    default: false // By default koi bhi naya user admin nahi hoga
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);