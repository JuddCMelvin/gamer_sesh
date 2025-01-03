// Require needed modules.
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Controllers
app.use('/games', require('./controllers/games'))

// Create a homepage route.
app.get('/', (req, res)  => {
    // This gets sent to the client
    // (your web browser most likely!)
    res.send('Hello world')
})

app.get('*', (req,res) => {
    res.status(404).render('error404')
})

// Listen for connections.
app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})

