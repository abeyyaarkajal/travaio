const express = require('express');
const router = express.Router();
const EmergencyMedia = require('../models/EmergencyMedia');

router.post('/', async (req, res) => {
  try {
    const media = await EmergencyMedia.create(req.body);
    res.status(201).json(media);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const medias = await EmergencyMedia.find();
    res.json(medias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
