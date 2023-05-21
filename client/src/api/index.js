import axios from "axios";

const allBreeds = () => axios.get("/breed/read")
// console.log(allBreeds())
const apis = {
allBreeds
}
export default apis;