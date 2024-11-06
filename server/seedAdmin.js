// seedAdmin.js (Run this file once to seed the admin data)
const mongoose = require('mongoose');
const AdminLoginModel = require('./models/adminLoginModel');
const bcrypt = require('bcrypt');

async function seedAdmin() {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourDatabaseName');
    
    const hashedPassword = await bcrypt.hash('yourAdminPassword', 10); // Replace with a secure password
    const admin = new AdminLoginModel({
      email: 'admin@example.com', // Replace with admin email
      password: hashedPassword,
    });

    await admin.save();
    console.log("Admin seeded successfully");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
}

seedAdmin();
