const mongoose = require('mongoose');

const emergencyMediaSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mediaType: { type: String, enum: ['Audio', 'Video'], required: true },
  mediaUrl: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isSent: { type: Boolean, default: false }
});

module.exports = mongoose.model('EmergencyMedia', emergencyMediaSchema);