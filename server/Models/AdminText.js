const mongoose = require('mongoose');

const adminTextMessageSchema = new mongoose.Schema({
    adminMessage: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now, // Automatically set the current date/time when a message is created
    },
});

const adminTextMessageModal = mongoose.model("adminTextMessage", adminTextMessageSchema);
module.exports = adminTextMessageModal;
