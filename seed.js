require('dotenv').config();
const mongoose = require('mongoose');

// Import all models
const User = require('./models/user');
const Route = require('./models/route');
const Alert = require('./models/alert');
const GPSLog = require('./models/gpsLog');
const LocationReminder = require('./models/locationReminder');
const EmergencyMedia = require('./models/emergencyMedia');
const RouteSafetyScore = require('./models/routeSafetyScore');
const emergencyContactRoutes = require('./routes/emergencyContactRoutes');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('🌱 Seeding database...');

  try {
    // Clear old data
    await User.deleteMany();
    await Route.deleteMany();
    await Alert.deleteMany();
    await GPSLog.deleteMany();
    await LocationReminder.deleteMany();
    await EmergencyMedia.deleteMany();
    await RouteSafetyScore.deleteMany();

    // 1. Create User
    const user = await User.create({
      name: "Ananya Sharma",
      email: "ananya4@example.com",
      phone: "9876543210",
      password: "securepassword",
      gender: "Female",
      emergencyContacts: [
        {
          name: "Riya Sharma",
          phone: "9123456789",
          email: "riya@gmail.com",
          relationship: "Sister"
        }
      ]
    });

    // 2. Create Route
    const route = await Route.create({
      userId: user._id,
      startLocation: "Delhi",
      endLocation: "Jaipur",
      routePoints: [
        { lat: 28.7041, lng: 77.1025 },
        { lat: 27.0238, lng: 74.2179 }
      ]
    });

    // 3. Create Alert
    await Alert.create({
      userId: user._id,
      routeId: route._id,
      alertType: "Deviation",
      message: "Unexpected route deviation detected",
      location: { lat: 28.5355, lng: 77.3910 }
    });

    // 4. Create GPS Log
    await GPSLog.create({
      userId: user._id,
      location: { lat: 28.4595, lng: 77.0266 },
      speed: 60
    });

    // 6. Create Location Reminder
    await LocationReminder.create({
      userId: user._id,
      locationName: "Ajmer Turn",
      location: { lat: 26.4499, lng: 74.6399 },
      radiusMeters: 200,
      message: "Wake up! You're approaching Ajmer."
    });

    // 7. Create Emergency Media
    await EmergencyMedia.create({
      userId: user._id,
      mediaType: "Audio",
      mediaUrl: "https://storage.travaio.com/emergency/recording123.mp3",
      isSent: true
    });

    // 8. Create Route Safety Score
    await RouteSafetyScore.create({
      routeId: route._id,
      gender: "Female",
      safetyScore: 6.5
    });

    console.log('✅ Seeding completed!');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }

}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});
