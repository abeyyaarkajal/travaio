const express = require('express');
const router = express.Router();
const GPSLog = require('../models/GPSLog');

router.post('/', async (req, res) => {
  try {
    const log = await GPSLog.create(req.body);
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const logs = await GPSLog.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
