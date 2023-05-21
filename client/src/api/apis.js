import axios from "axios";

const getProducts = () => axios.get('/catalog/list')
const getInfo = () => axios.get('/catalog/info')
const makeit = () => axios.get('/catalog/create')
const getCatagories = () => axios.get('/catalog/order')

const apis = {
    getProducts,
    getInfo,
    getCatagories,
    makeit
}

export default apis

