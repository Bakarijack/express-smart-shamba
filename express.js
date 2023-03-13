const express = require('express')
const bodyParser = require('body-parser')
const indexRoutes = require('./routes/index.routes')
const userRoutes = require('./routes/user.routes')
const expressHandlebars = require('express-handlebars')

const app = express()

app.use(express.static('public'))

app.engine('handlebars', expressHandlebars.engine({
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: __dirname+'/views/layouts/',
    partialsDir: __dirname+ '/views/partials/'
}))

app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

indexRoutes(app)
userRoutes(app)

module.exports = app