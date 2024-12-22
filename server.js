// Require needed modules.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client
    // (your web browser most likely!)
    res.send('Hello world')
})

// Listen for connections.
app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})

