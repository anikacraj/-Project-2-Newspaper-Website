const mongoose = require('mongoose')
const adminLogin =new mongoose.Schema({
    
    email:String,
    password:String,
    logInDate:String,
})

const adminLoginModal = mongoose.model("adminLogin",adminLogin)
module.exports =adminLoginModal