const express = require('express')
const games = express.Router()
const Game = require('../models/game.js')

games.get('/', (req,res) => {
    res.render('games/index', 
        {
        games: Game,
        title: 'All Games'
        }
    )
})

// SHOW
games.get('/:id', (req, res) => {
    if (Game[req.params.id]) {
        res.render('games/show', {
            game: Game[req.params.id]
        })
    } else {
        res.render('error404')
    }
})

module.exports = games
