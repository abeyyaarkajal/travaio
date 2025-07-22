const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import all route files
const userRoutes = require('./routes/userRoutes');
const alertRoutes = require('./routes/alertRoutes');
const gpsLogRoutes = require('./routes/gpsLogRoutes');
const locationReminderRoutes = require('./routes/locationReminderRoutes');
const routeRoutes = require('./routes/routeRoutes');
const routeSafetyScoreRoutes = require('./routes/routeSafetyScoreRoutes');
const emergencyMediaRoutes = require('./routes/emergencyMediaRoutes');
const emergencyContactRoutes = require('./routes/emergencyContactRoutes');
const alarmRoutes = require("./routes/alarmRoutes");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Log every request (for debugging)
app.use((req, res, next) => {
  console.log(`➡️  ${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Register all API routes
app.use('/api/users', userRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/gpslogs', gpsLogRoutes);
app.use('/api/locationreminders', locationReminderRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/routesafetyscores', routeSafetyScoreRoutes);
app.use('/api/emergencymedias', emergencyMediaRoutes);
app.use('/api/emergency-contacts', emergencyContactRoutes);
app.use('/api/alarms', alarmRoutes);

// Default root route
app.get('/', (req, res) => {
  res.send('🚀 Travaio Backend Running...');
});

// Catch-all for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "🔍 Route not found" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
