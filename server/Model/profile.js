const mongoose = require("mongoose")
const { Schema, model } = mongoose

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    },
    article: [{
        title: {
            type: String,
            required: true
        },
        datepublished: {
            type: Date,
            default: Date.now
        },
        text: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        category: {
            type: [String]
        }
    }],
    comment: {
        type: [
            {
                comment: {
                    type: String,
                    required: true
                },
                date: {
                    type: Date,
                    default: Date.now
                },
                author: {
                    type: String,
                    required: true
                }
            }
        ]
    }




})

module.exports = model("post", PostSchema)