// ENVIROMENT VARIABLES
require('dotenv').config()
require('newrelic')
const { PORT = 3000, NODE_ENV = "developement" } = process.env

// MONGOOSE
const mongoose = require('./db/connection')

// CORS
const cors = require('cors')

// EXPRESS
const express = require('express')
const app = express()

// OTHER IMPORTS
const morgan = require('morgan')
const projectController = require('./controllers/project')

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/projects', projectController)

// ROUTES AND ROUTERS

// Default Route
app.get('/', (req, res) => {
    res.json({ msg: "Default route... Nothing to see here..."})
})

// LISTENER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})