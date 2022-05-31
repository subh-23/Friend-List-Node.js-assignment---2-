const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

//mongodb connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true }, { useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))


//set up middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))


//friend route to handle data
const friendRoute = require('./routes/friend')
app.use('/friends', friendRoute)


//basic get route
app.get('/', (req, res) => {
    res.status(200).send("Please hit /friends endpoint to extract data from database")
})

//starting server
app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));