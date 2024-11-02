const mongoose = require('mongoose');

const textMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now, // Automatically set the current date/time when a message is created
    },
});

const textMessageModel = mongoose.model("textMessage", textMessageSchema);
module.exports = textMessageModel;
