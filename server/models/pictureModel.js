const mongoose = require("mongoose")
const { Schema } = mongoose

const PictureSchema = new Schema({
    subjects: {
        type: String,
        required: true,
        enum: ['breed', 'dog', 'owner']
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'subjects'
    },
    path: String
})

const Pictures = mongoose.model("picture", PictureSchema)

module.exports = Pictures