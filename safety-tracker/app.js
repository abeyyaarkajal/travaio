
require('./db');
const User = require('./models/User');

async function runExample() {
  const newUser = new User({
    name: "Alice",
    email: "alice@example.com",
    phone: "1234567890",
    password: "securePass123",
    gender: "Female",
    emergencyContacts: [
      { name: "Bob", phone: "9876543210", email: "bob@example.com", relationship: "Brother" }
    ]
  });

  await newUser.save();
  console.log("User saved successfully!");
}

runExample();
