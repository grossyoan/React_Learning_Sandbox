import React from 'react'
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

function Welcome(props) {
    return <h1>Welcome {props.name}, we're happy to have you back!</h1>
}

const element = <Welcome name="Yoan" />

ReactDOM.render(
    element,
    document.querySelector('#root')
)

