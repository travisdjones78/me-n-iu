const Breed = require("../models/breedModel")
const get_all_breeds = async (req, res) => {
    try {
        console.log("sfv")
        return res.status(200).json({ msg: "success" })
    } catch (error) {
        return res.status(500).json({ msg: "failure" })
    }
}

const create_breed = async (req, res) => {
    try {
        res.status(200).json({ msg: 'words' })
    } catch (error) {
        res.status(500).json({ msg: 'failure', error })
    }
}




module.exports = {
    get_all_breeds,
    create_breed
}