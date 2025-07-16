const express = require('express');
const router = express.Router();
const RouteSafetyScore = require('../models/RouteSafetyScore');

router.post('/', async (req, res) => {
  try {
    const score = await RouteSafetyScore.create(req.body);
    res.status(201).json(score);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const scores = await RouteSafetyScore.find();
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
