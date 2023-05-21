import axios from "axios";

const allBreeds = () => axios.get("/breed/read")
const createBreed= payLoad=> axios.post('/breed/create',payLoad)
const apis = {
allBreeds
}
export default apis;