const mongoose = require('mongoose')
const adminLogin =new mongoose.Schema({
    
    email:String,
    password:String,
    signInDate:String,
})

const adminLoginModal = mongoose.model("adminLogin",adminLogin)
module.exports =adminLoginModal