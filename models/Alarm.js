const mongoose = require("mongoose");

const alarmSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  time: {
    type: String, // or Date if you're doing automation
    required: true,
  },
  label: {
    type: String,
    default: "Wake up!",
  },
  isActive: {
    type: Boolean,
    default: true,
  }
});

module.exports = mongoose.model("Alarm", alarmSchema);
