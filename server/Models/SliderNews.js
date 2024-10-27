const mongoose = require('mongoose');

// Define the schema for header news
const SliderNewsSchema = new mongoose.Schema({
    newsOne: String,
    newsTwo: String,
    newsThree: String,
    newsFour: String
});

// Use an appropriate model name that reflects the schema
const SliderNewsModal = mongoose.model('SliderNews', SliderNewsSchema);

module.exports = SliderNewsModal;
