// models/adminLoginModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminLoginSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const AdminLoginModel = mongoose.model('AdminLogin', adminLoginSchema);

module.exports = AdminLoginModel;
