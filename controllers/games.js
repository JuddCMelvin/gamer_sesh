const express = require('express')
const games = express.Router()
const Game = require('../models/game.js')

games.get('/', (req,res) => {
    res.render('games/index', 
        {
        games: Game,
        }
    )
})

// NEW
games.get('/new', (req, res) => {
    res.render('games/new')
})

// EDIT
games.get('/:id/edit', (req, res) => {
    res.render('games/edit', {
        game: Game[req.params.id],
        index: req.params.id
    })
})

// SHOW
games.get('/:id', (req, res) => {
    if (Game[req.params.id]) {
        res.render('games/show', {
            game: Game[req.params.id], 
            index: req.params.id, 
        })
    } else {
        res.render('error404')
    }
})

// CREATE
games.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image) {
        req.body.image = 'https://placehold.co/400?text=placeholder'
    }
    Game.push(req.body)
    res.redirect('/games')
})

// UPDATE
games.put('/:id', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://placehold.co/400?text=placeholder'
    }
    Game[req.params.id] = req.body
    res.redirect(`/games/${req.params.id}`)
})

// DELETE
games.delete('/:id', (req, res) => {
    Game.splice(req.params.id, 1)
    res.status(303).redirect('/games')
})

module.exports = games


