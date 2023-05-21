const mongoose = require("mongoose")
const { Schema } = mongoose

const PictureSchema = new Schema({
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pictures"
    },
    path: String
})

const pictures = mongoose.model("pictures", PictureSchema)

module.exports = pictures