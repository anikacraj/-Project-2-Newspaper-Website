const mongoose = require('mongoose')
const contactMessage =new mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const contactMessageModal = mongoose.model("contactMessage",contactMessage)
module.exports =contactMessageModal;