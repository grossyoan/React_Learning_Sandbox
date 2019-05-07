import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// function tickUpdateTest() {
//     const element = (
//         <div>
//         <h1> Hello there!</h1>
//         <h2> Today's date is {new Date().toLocaleDateString()}, and it's {new Date().toLocaleTimeString()}</h2>
//         </div> 
//     )
//     ReactDOM.render(element, document.getElementById('root'))
// }

// tickUpdateTest(autoUpdate, 1000);

// function Welcome(props) {
//     return <h1>Welcome {props.name}, we're happy to have you back!</h1>
// }

// const element = <Welcome name="Yoan" />

// ReactDOM.render(
//     element,
//     document.querySelector('#root')
// )




// function Clock(props) {
//     return(
//         <div>
//             <p> Alors il parait que ça va afficher la date</p>
//             <p>Il est {props.date.toLocaleTimeString()}</p>
//         </div>
//     )
// }

// function Tick() {
//     ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.querySelector('#root')
//     )
// }

// setInterval(Tick, 1000)


class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    componentDidUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render(){
        return (
            <div>
                <p> Alors il parait que ça va afficher la date avec un state</p>
                <p>Il est {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}


ReactDOM.render(
    <Clock />,
    document.querySelector('#root')
)