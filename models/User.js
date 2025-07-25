const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
  phone: { type: String },
  password: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
