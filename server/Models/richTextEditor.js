const mongoose = require('mongoose')
const text =new mongoose.Schema({
  
content:String
   
})

const textModal = mongoose.model("newsText",text)
module.exports =textModal;