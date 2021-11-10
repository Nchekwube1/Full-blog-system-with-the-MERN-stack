const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    posts: {
        type: [String],
    },
    bio: {
        type: String
    }

})

module.exports = mongoose.model("profile", schema)