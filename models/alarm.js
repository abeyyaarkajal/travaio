const mongoose = require('mongoose');

const alarmSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  time: { type: Date, required: true },
  label: { type: String },
  isActive: { type: Boolean, default: true },
  repeat: { type: [String], enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], default: [] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alarm', alarmSchema);
