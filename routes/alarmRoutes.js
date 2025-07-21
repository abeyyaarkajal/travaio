const express = require("express");
const router = express.Router();
const Alarm = require("../models/Alarm");

// Create new alarm
router.post("/", async (req, res) => {
  try {
    const { userId, time, label } = req.body;

    const alarm = new Alarm({
      userId,
      time,
      label,
    });

    await alarm.save();
    res.status(201).json({ message: "Alarm created", alarm });
  } catch (err) {
    res.status(500).json({ error: "Failed to create alarm", details: err.message });
  }
});

// Get all alarms for a user
router.get("/:userId", async (req, res) => {
  try {
    const alarms = await Alarm.find({ userId: req.params.userId });
    res.status(200).json(alarms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch alarms", details: err.message });
  }
});

module.exports = router;
