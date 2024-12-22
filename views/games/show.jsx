const React = require('react')
const Default = require('../layouts/default')

function Show ({game}) {
    return (
        <Default>
            <h2>Show Game</h2>
            <h3>{game.title}</h3>
            <img src={game.image} alt={game.title} />
            <div className="backButton">
                <a href="/games"><button>Go back to the index</button></a>
            </div>
        </Default>
    )
}

module.exports = Show


