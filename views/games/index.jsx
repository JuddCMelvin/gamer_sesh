const React = require('react')
const Default = require('../layouts/default')

function Index({ games, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            {/* This is a JSX comment. */}
            <ul>
                {
                    games.map((game, index) => {
                        console.log(game)
                        return (
                            <li key={index}>
                                <a href={`/games/${index}`}>
                                    {game.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/games/new"><button>Add a new game</button></a>
            </div>
        </Default>
    )
}

module.exports = Index
