const mongoose = require('mongoose')
const usersRegister =new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    signInDate:String,
})

const usersRegisterModal = mongoose.model("usersRegister",usersRegister)
module.exports =usersRegisterModal