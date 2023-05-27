const mongoose = require("mongoose")
const { Schema } = mongoose

const OwnerSchema = new Schema({
    picture: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "owner"
    },
    dogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "dog"
    },

})

const owner = mongoose.model("owner", OwnerSchema)

module.exports = owner