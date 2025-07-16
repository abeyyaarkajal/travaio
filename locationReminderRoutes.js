const express = require('express');
const router = express.Router();
const LocationReminder = require('../models/LocationReminder');

router.post('/', async (req, res) => {
  try {
    const reminder = await LocationReminder.create(req.body);
    res.status(201).json(reminder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const reminders = await LocationReminder.find();
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;