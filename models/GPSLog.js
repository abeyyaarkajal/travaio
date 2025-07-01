const mongoose = require('mongoose');

const gpsLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  speed: { type: Number },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GPSLog', gpsLogSchema);
