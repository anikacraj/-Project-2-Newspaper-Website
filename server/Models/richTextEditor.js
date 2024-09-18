const mongoose = require('mongoose')
const text =new mongoose.Schema({
    title:String,
    news:String
   
})

const textModal = mongoose.model("newsText",text)
module.exports =textModal;