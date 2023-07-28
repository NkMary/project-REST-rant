const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>African REST-Rant</h1>
                <div>
                    <img src="/images/woman.jpg" alt="woman sitting at a table in front of food" />
                    <div>
                    Photo by <a href="https://unsplash.com/@iamophb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ophélie Bonavita</a> on <a href="https://unsplash.com/s/photos/african-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home 