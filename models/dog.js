const mongoose = require("mongoose");
// const { stringify } = require("nodemon/lib/utils"); // này là gì vậy???
const dogSchema = new mongoose.Schema({
    productid: {
        type: String,
        required: true
    },
    category: {
        type: String,
        // required: true
    },
    label: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    price: {
        type: [Number],
        // required: true
    },
    image: {
        type: [String],
        // required: true
    },
    weight: {
        type: [String],
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    benefit: {
        type: String,
        // required: true
    },
    instruction: {
        type: String,
        // required: true
    }
})

module.exports = mongoose.model('dog', dogSchema)