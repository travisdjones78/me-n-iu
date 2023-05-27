const mongoose = require("mongoose")
const { Schema } = mongoose

const BreedSchema = new Schema({
    originated: {
        type: Date
    },
    picture: String,
    // picture: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "pictures"
    // },
    name: String,
    info: String
})

const Breeds = mongoose.model("breed", BreedSchema)

module.exports = Breeds
