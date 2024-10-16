const mongoose = require('mongoose');

// Define the schema for header news
const headerNewsSchema = new mongoose.Schema({
    messageOne: String,
    messageTwo: String,
    messageThree: String,
    messageFour: String
});

// Use an appropriate model name that reflects the schema
const HeaderNewsModal = mongoose.model('HeaderNews', headerNewsSchema);

module.exports = HeaderNewsModal;
