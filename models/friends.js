const mongoose = require('mongoose')

//designing a friend model
const friendSchem = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true,
        default: Date.now
    }
})
module.exports = mongoose.model('demo', friendSchem)