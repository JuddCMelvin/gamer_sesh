const React = require('react')
const Default = require('../layouts/default')

function Show ({game}) {
    return (
        <Default>
            <h2>Show Game</h2>
            <h3>{game.title}</h3>
            <img src={game.image} alt={game.title} />
        </Default>
    )
}

module.exports = Show


