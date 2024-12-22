// Require needed modules.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

//Controllers
app.use('/games', require('./controllers/games'))

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Create a homepage route.
app.get('/', (req, res)  => {
    // This gets sent to the client
    // (your web browser most likely!)
    res.send('Hello world')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Listen for connections.
app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})

