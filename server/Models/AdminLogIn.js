<<<<<<< HEAD
// models/adminLoginModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
=======
const mongoose = require('mongoose')
const adminLogin =new mongoose.Schema({
    
    email:String,
    password:String,
    logInDate:String,
})
>>>>>>> c73d4d8283ec26becd679c84bc71f865a38fd2a9

const adminLoginSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const AdminLoginModel = mongoose.model('AdminLogin', adminLoginSchema);

module.exports = AdminLoginModel;
