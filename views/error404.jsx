const React = require('react')
const Default = require('../layouts/default')

function Error() {
    return (
        <Default title={title}>
            <h2>Error: Page not Found</h2>
        </Default>
    )
}

module.exports = Error
