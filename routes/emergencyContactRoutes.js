const express = require('express');
const router = express.Router();
const EmergencyContact = require('../models/emergencyContactModel');

// POST - Add Emergency Contact
router.post('/', async (req, res) => {
  try {
    const contact = new EmergencyContact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All Emergency Contacts for a User
router.get('/:userId', async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ userId: req.params.userId });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
