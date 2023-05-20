const mongoose = require("mongoose")
const { Schema }  = mongoose

const BreedSchema = new Schema({
    originated:Date,
    picture:{type:mongoose.Schema.Types.ObjectId,ref:"pictures"},
    name:String
})

const breeds = mongoose.model("breed", BreedSchema)

module.exports = breeds
