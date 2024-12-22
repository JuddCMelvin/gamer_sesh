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

// NEW
games.get('/new', (req, res) => {
    res.render('games/new')
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

// CREATE
games.post('/', (req, res) => {
    console.log(req.body)
    // if (!req.body.image) {
    //     req.body.image = 'https://placehold.co/400?text=placeholder'
    // }
    Game.push(req.body)
    res.redirect('games/index')
})


module.exports = games

