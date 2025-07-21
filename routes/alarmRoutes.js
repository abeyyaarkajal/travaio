const express = require('express');
const dotenv = require('dotenv');
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

