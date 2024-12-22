const React = require('react')
const Default = require('./layouts/default')

function Index({ games }) {
    return (
        <Default>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            {/* This is a JSX comment. */}
            <ul>
                {
                    games.map((game, index) => {
                        return (
                            <li key={index}>
                                <a href={`/games/${index}`}>
                                    {game.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index
