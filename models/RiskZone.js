const mongoose = require('mongoose');

const riskZoneSchema = new mongoose.Schema({
  areaName: { type: String },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  dangerLevel: { type: Number, min: 1, max: 10 },
  isLit: { type: Boolean },
  description: { type: String }
});

module.exports = mongoose.model('RiskZone', riskZoneSchema);
