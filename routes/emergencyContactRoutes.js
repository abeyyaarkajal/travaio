// routes/emergencyContactRoutes.js
const express = require('express');
const router = express.Router();
const EmergencyContact = require('../models/emergencyContact');

// Create new emergency contact
router.post('/', async (req, res) => {
  try {
    const { name, phone, relationship, userId } = req.body;
    const newContact = new EmergencyContact({ name, phone, relationship, userId });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all emergency contacts for a user
router.get('/:userId', async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ userId: req.params.userId });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an emergency contact
router.delete('/:id', async (req, res) => {
  try {
    await EmergencyContact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
