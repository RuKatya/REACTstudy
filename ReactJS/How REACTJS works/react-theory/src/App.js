import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
//-------Trying to import Car.js----/
import Car from './Car/Car'

//------First example------//

// class App extends Component {
//     render() {
//         return React.createElement(
//             'div', {
//                 className: 'App'
//             },
//             React.createElement(
//                 'h1',
//                 null,
//                 'Hello world'
//             )
//         )
//     }
// }

//------Second Example----//

// function App() {
//     return (
//         React.createElement(
//             'div', {
//                 className: 'App'
//             },
//             React.createElement(
//                 'h1',
//                 null,
//                 'Hello world'
//             )
//         )
//     )
// }

//-----Third example with STYLE------//

// function App() {
// const divStyle = {
//   'textAlign':'center'
// }

//     return (
// important--className and not class!
// <div>
//   <div style={divStyle}> 
//     <h1 style={{color:'blue', fontSize:'5rem'}}>Hello World</h1>
//   </div>
//     <p className='App'>How are you?</p>
// </div>
//only one element -> div
//cant put two elements ->
// <div className='App'> 
//   <h1>Hello World</h1>
// </div>
// <p>hello</p>
//     )
// }

//-----From created project----//


// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1>Hello world</h1>
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
// );
// }



//----------Create simple component-------//
function App() {
  const divStyle = {
    'textAlign': 'center',
    
  }

  return (
    <div>
      <div style={divStyle}>
        <h1 style={{color:'blue'}}>Hello World</h1>

{/* If we poot twice Car it will show us twice text of companent */}

        <Car name={'Ford'} year={2018}>
        <p style={{color:'red'}}>COLOR</p>
          </Car> 
        <Car name={'Audi'} year={2016}>
          <p style={{color:'green'}}>COLOR</p> {/* You cant write in <Car></Car> without promis*/}
        </Car>
        <Car name='Mazda' year='2008'/>
      </div>
      <p className='App'>How are you?</p>
    </div>


  )
}







export default App;