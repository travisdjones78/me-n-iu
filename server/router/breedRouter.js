const express = require("express")
const breedController = require("../controllers/breedController")
const router = express.Router()
router.get('/read', breedController.get_all_breeds)
// router.get("/getBreeds", breedController.getAllBreeds)
router.get('/create',breedController.create_breed)

module.exports = router
