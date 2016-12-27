var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div
// Using webpack to move MyTitle to separate file

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
    div(null,
        MyTitleFact({title: 'Props are great'}),
        ce(MyTitle, {title: 'Props second', color: 'red'}),
        React.createElement(MyTitle, {title: 'Passing props here'})
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
