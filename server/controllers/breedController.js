const Breed = require("../models/breedModel")
const get_all_breeds = async (req, res) => {
    try {
        const breedData = await Breed.find({})
        return res.status(200).json({ msg: "success", breedData })
    } catch (error) {
        return res.status(500).json({ msg: "failure" })
    }
}

const create_breed = async (req, res) => {
    try {
        console.log(req)
        const breedData = await Breed.create()
        // res.status(200).json({ msg: 'success', breedData })
    } catch (error) {
        res.status(500).json({ msg: 'failure', error })
    }
}




module.exports = {
    get_all_breeds,
    create_breed
}