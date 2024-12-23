const React = require('react')
const Default = require('../layouts/default')

function Show ({game, index}) {
    return (
        <Default>
            <h2>Show Game</h2>
            <h3>{game.name}</h3>
            <img src={game.image} alt={game.name} />
            <div className="backButton">
                <a href="/games"><button>Go back to the index</button></a>
            </div>
            <form action={`/games/${index}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
            </form>
            <a href={`/games/${index}/edit`}><button>Edit</button></a>
        </Default>
    )
}

module.exports = Show


