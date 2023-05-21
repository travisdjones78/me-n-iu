const mongoose = require("mongoose")
const { Schema }  = mongoose

const OwnerSchema = new Schema({
  
    dogs:{type:mongoose.Schema.Types.ObjectId,ref:"dogs"},
 
})

const owner = mongoose.model("owner", OwnerSchema)

module.exports = owner