const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  alertType: { type: String, enum: ['Deviation', 'UnsafeZone', 'NoResponse'], required: true },
  message: { type: String },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  alertTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', alertSchema);