const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Card = new Schema(
    {
        name: { type: String, required: true },
        url: { type: String, required: true },
        description: { type: String, required: true },
        time: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('cards', Card)