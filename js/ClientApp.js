 // Global var
 var div = React.DOM.div
 var h1 = React.DOM.h1

 //  Make our own component like div and h1
 var MyTitle = React.createClass({
     render() {
         return (
             div(null,
                 h1({style: {color: this.props.color}},this.props.title //using props to pass manual infomation
                     
                 )
             )
         )
     }
 })

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
 