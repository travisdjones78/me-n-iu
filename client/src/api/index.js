import axios from "axios";

const allBreeds = () => axios.get("/breed/getBreeds")

const apis = {
allBreeds
}
export default apis