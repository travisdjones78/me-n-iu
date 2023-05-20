require('colors')

const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const PORT = 3005
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))
app.use((rec, res, next) => {
    const { method, url } = rec
    console.log(`SEVERLOG`.red, `Method:${method} url:${url}`.green);
    next()
})
app.get("/",(req,res)=>{
    res.send("wjsdhf")
})
app.listen(PORT, () => {
    console.log(`server runnin on ${PORT}`)
})