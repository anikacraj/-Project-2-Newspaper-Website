const mongoose = require('mongoose')
const text =new mongoose.Schema({
    category: String, 
 
    content:String,
    createdAt: { type: Date, default: Date.now }
})

const textModal = mongoose.model("newsText",text)
module.exports =textModal;