const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    uploadedDate: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("post", postSchema);
