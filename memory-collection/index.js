require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require("path")

const db = require('./db')
const cardRouter = require('./routes/card-router')

const app = express()
const apiPort = process.env.DB_PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/api', cardRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))