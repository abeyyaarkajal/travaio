const express = require('express');
const router = express.Router();
const EmergencyContact = require('../models/emergencyContactModel');

router.post('/', async (req, res) => {
  try {
    const contact = await EmergencyContact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create contact', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await EmergencyContact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts', details: err.message });
  }
});

module.exports = router;
