const React = require('react')
const Default = require('../layouts/default')

function Edit (game, index) {
    return (
        <Default>
        <h2>Add or Edit a Game</h2>
        <form action={`/games/${index}?_method=PUT`} method="POST">
            {/* Title */}
            <label htmlFor="name">Title</label>
            <input 
                name="name" 
                id="name" 
                placeholder="Game title" 
                required 
            /> 

            {/* Description */}
            <label htmlFor="description">Description</label>
            <textarea 
                name="description" 
                id="description" 
                placeholder="Brief description of the game" 
            ></textarea>

            {/* Year Released */}
            <label htmlFor="yearReleased">Year Released</label>
            <input 
                name="yearReleased" 
                id="yearReleased" 
                placeholder="Year (e.g., 2022)" 
                min="1900" 
                max={new Date().getFullYear()} 
                required 
            />

            {/* Creators */}
            <label htmlFor="creators">Creators</label>
            <input 
                name="creators" 
                id="creators" 
                placeholder="Comma-separated list of creators (e.g., FromSoftware)" 
            />

            {/* Image */}
            <label htmlFor="image">Image URL</label>
            <input 
                name="image" 
                id="image" 
                placeholder="URL of the game's image" 
            />

            {/* Submit Button */}
            <br />
            <input type="submit" />
        </form>
    </Default>
    );
}

module.exports = Edit


