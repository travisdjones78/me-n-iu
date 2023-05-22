const Breed = require("../models/breedModel")

// console.log(Breed)

const get_all_breeds = async (req, res) => {
    try {
        // const breedData = await Breed.find({})
        return res.status(200).json({ msg: "success", breedData })
    } catch (error) {
        return res.status(500).json({ msg: "failure", error })
    }
}

const create_breed = async (req, res) => {

    // console.log(req.body)
    try {
        const breedData = Breed.create(req.body)
        // return res.status(200).json({ msg: 'success', breedData })
        // return res.status(200).json({ msg: 'success',body:req.body })
    } catch (error) {
        return res.status(500).json({ msg: 'failure', error: error.response })
    }
}




module.exports = {
    get_all_breeds,
    create_breed
}