// all other imports below here
// import 'dotenv/config';

require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const path = require('path')

const port = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "client", "build")))


// Defining the routes to use
app.use('/api/home', routes.home)
app.use('/api/kitchen', routes.kitchen)
app.use('/api/bedroom', routes.bedroom)
app.use('/api/festival', routes.festival)
app.use('/api/survival', routes.survival)

// sends index.html back to the main file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () =>
    console.log(`App listening on port ${port}`)
)