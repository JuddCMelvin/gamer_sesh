const express = require('express')
const games = express.Router()

games.get('/', (req,res) => {
    res.send('GET/games')
})

module.exports = router
