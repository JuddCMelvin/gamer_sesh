const express = require('express')
const games = express.Router()
const Game = require('../models/game.js')

games.get('/', (req,res) => {
    res.render('index', 
        {
        games: Game
        }
    )
})

// SHOW
games.get('/:id', (req, res) => {
    res.send(Game[req.params.id])
})

module.exports = games
