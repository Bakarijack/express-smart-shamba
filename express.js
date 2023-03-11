const express = require('express')
const bodyParser = require('body-parser')
const indexRoutes = require('./routes/index.routes')
const userRoutes = require('./routes/user.routes')

const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

indexRoutes(app)
userRoutes(app)

module.exports = app