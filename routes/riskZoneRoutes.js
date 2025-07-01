const express = require('express');
const router = express.Router();
const RiskZone = require('../models/RiskZone');

router.post('/', async (req, res) => {
  try {
    const zone = await RiskZone.create(req.body);
    res.status(201).json(zone);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const zones = await RiskZone.find();
    res.json(zones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;