const mongoose = require("mongoose")
const { Schema }  = mongoose

const DogSchema = new Schema({
   breed:{type:mongoose.Schema.Types.ObjectId,ref:"breeds"},
   pictureId:{type:mongoose.Schema.Types.ObjectId,ref:"picture"},
   owner:{type:mongoose.Schema.Types.ObjectId,ref:"owner"},
})

const dogs = mongoose.model("dog", DogSchema)

module.exports = dogs