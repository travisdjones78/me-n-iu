const Breed = require("../models/breedModel")
const getAllBreeds = async (req, res) => {
    try {
        console.log("sfv")
        res.status(200).json({ msg: "success" })
    } catch (error) {
        res.status(500).json({ msg: "failure" })
    }
}

module.exports = {
    getAllBreeds
}