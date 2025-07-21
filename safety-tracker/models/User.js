const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  relationship: { type: String }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
  phone: { type: String },
  password: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  emergencyContacts: [emergencyContactSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);