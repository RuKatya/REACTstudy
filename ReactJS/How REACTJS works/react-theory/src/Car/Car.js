import React from 'react'

//-----Many examples for write function ---//

//----first regular function---//
// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }


//----second arrow function ---//
// const car = () => {
//     return (
//         <h2>This is car component</h2>
//     )
// }

//---third arrow function without return---//
// const car = () => (
// <div>
//     This is car <strong>component</strong>
//     </div>
// )

//---additionally we can create component without write function---//
export default (props) => (
    <div>
        <h3>Car name: {props.name} </h3>
        <p>Year: <strong>{props.year}</strong></p>
        { props.children }
    </div>
)