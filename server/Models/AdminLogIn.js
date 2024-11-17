
const mongoose = require('mongoose')
const adminLoginSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const AdminLoginModel = mongoose.model('AdminLogin', adminLoginSchema);

module.exports = AdminLoginModel;
