import axios from "axios";
import DogList from "../dogList.json";

const allBreeds = () => axios.get("/breeds/read")
const createBreed = payLoad => axios.post('/breeds/create', payLoad)
const dogList = () => DogList

const apis = {
    allBreeds,
    createBreed,
    dogList
}
export default apis;