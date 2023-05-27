const Breed = require("../models/breedModel")
const Picture = require('../models/pictureModel')


const get_all_breeds = async (req, res) => {
    try {
        const breedData = await Breed.find({})
        return res.status(200).json({ msg: "success", breedData })
        // return res.status(200).json({ msg: "success"})
    } catch (error) {
        return res.status(500).json({ msg: "failure", error })
    }
}

const create_breed = async (req, res) => {
    try {
        const breedData = await Breed.create(req.body)
        // const picData = await (await Picture.create({path:breedData.picture})).populate('dog')
        // console.log(picData)
        // console.log({path:req.body.picture,subjectId:'dog'})
        // console.log(breedData)
        // return res.status(200).json({ msg: 'success', breedData })
        // return res.status(200).json({ msg: 'success' })
    } catch (error) {
        return res.status(500).json({ msg: 'failure', error: error.response })
    }
}




module.exports = {
    get_all_breeds,
    create_breed
}