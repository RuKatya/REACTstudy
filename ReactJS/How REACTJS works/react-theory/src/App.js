import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

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

//-----Third example------//

function App() {
    return (
      // important--className and not class!
        <div>
          <div className='App'> 
            <h1>Hello World</h1>
          </div>
            <p className='App'>How are you?</p>
        </div>
        //only one element -> div
        //cant put two elements ->
        // <div className='App'> 
        //   <h1>Hello World</h1>
        // </div>
        // <p>hello</p>
    )
}

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

export default App;