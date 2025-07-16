const mongoose = require('mongoose');

const routeSafetyScoreSchema = new mongoose.Schema({
  routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  safetyScore: { type: Number, min: 0, max: 10 },
  calculatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RouteSafetyScore', routeSafetyScoreSchema);