const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Rest Rant Live <Demo></Demo></title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def