const mongoose = require('mongoose');

// Define the schema for header news
const SliderNewsSchema = new mongoose.Schema({
    messageOne: String,
    messageTwo: String,
    messageThree: String,
    messageFour: String
});

// Use an appropriate model name that reflects the schema
const SliderNewsModal = mongoose.model('SliderNews', SliderNewsSchema);

module.exports = SliderNewsModal;
