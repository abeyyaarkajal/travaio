const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startLocation: { type: String, required: true },
  endLocation: { type: String, required: true },
  routePoints: [
    {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Route', routeSchema);