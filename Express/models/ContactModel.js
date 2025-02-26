const mongoose = require('mongoose')

const ContactModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

const Contacts = mongoose.model("ContactS", ContactModel)
module.exports = Contacts