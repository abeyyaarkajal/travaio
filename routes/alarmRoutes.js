// const express = require('express');
// const router = express.Router();
// const Alarm = require('../models/alarm');

// // Create Alarm
// router.post('/', async (req, res) => {
//   try {
//     const alarm = new Alarm(req.body);
//     await alarm.save();
//     res.status(201).json(alarm);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Get All Alarms for a User
// router.get('/:userId', async (req, res) => {
//   try {
//     const alarms = await Alarm.find({ userId: req.params.userId });
//     res.json(alarms);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Update Alarm
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedAlarm = await Alarm.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedAlarm);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Delete Alarm
// router.delete('/:id', async (req, res) => {
//   try {
//     await Alarm.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Alarm deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/userroutes');
const statusRoutes = require('./routes/statusRoutes');
const alarmRoutes = require('./routes/alarmRoutes'); // ✅ ADD THIS LINE

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/status', statusRoutes);
app.use('/api/alarms', alarmRoutes); // ✅ ADD THIS LINE

app.get('/dashboard', (req, res) => {
  res.send('Welcome to the dashboard!');
});

// Connect DB and start server
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("🚀 Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err.message);
  });

