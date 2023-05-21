const express = require('express')
const path = require('path')
const breedRouter = require('./router/breedRouter')
// const db = require('./connection')
const PORT = process.env.PORT || 3028
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use((rec, res, next) => {
    const { method, url } = rec
    console.log(`SEVERLOG`.red, `Method:${method} url:${url}`.green);
    next()
})

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${8888}`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendStatus(500)
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/breeds', breedRouter)

app.listen(PORT, () => {
    console.log(`server runnin on ${PORT}`)
})