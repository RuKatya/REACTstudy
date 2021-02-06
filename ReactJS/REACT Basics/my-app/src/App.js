import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Car from './Car/Car'

//----Option how to use function with title that you choose-----//
// class App extends Component {
//   state = {
//     cars: [
//       { name: 'Ford', year: 2018 },
//       { name: 'Audi', year: 2016 },
//       { name: 'Mazda', year: 2008 }
//     ],
//     pageTitle: 'React component'
//   }

//   handleChangeTitle = () => {
//     console.log('Click')

//     const oldTitle = this.state.pageTitle

//     const newTitle = oldTitle + ' (changed)'

//     this.setState({ /* for change the title!!*/
//       pageTitle: newTitle
//     })
//   }

//   render() {
//     const divStyle = {
//       'textAlign': 'center',
//     }

//     const cars = this.state.cars

//     return (
//       <div>
//         <div style={divStyle}>
//           <h1 style={{ color: 'blue' }}>{this.state.pageTitle}</h1>

//           <button onClick={this.handleChangeTitle}>Change title</button>

//           <Car
//             name={cars[0].name}
//             year={cars[0].year}
//             onChangeTitle={this.handleChangeTitle}
//           />
//           <Car
//             name={cars[1].name}
//             year={cars[1].year}
//             onChangeTitle={this.handleChangeTitle}
//           />
//           <Car
//             name={cars[2].name}
//             year={cars[2].year}
//             onChangeTitle={this.handleChangeTitle}
//           />
//         </div>

//         <p className='App'>How are you?</p>
//       </div>
//     )
//   }
// }

//---Option how to use function with diffrent name from other places--//

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda', year: 2008 }
    ],
    pageTitle: 'React component'
  }

  handleChangeTitle = (newTitle) => {
    console.log('Click')

    this.setState({ /* for change the title!!*/
      pageTitle: newTitle
    })
  }

  render() {
    const divStyle = {
      'textAlign': 'center',
    }

    const cars = this.state.cars

    return (
      <div>
        <div style={divStyle}>
          <h1 style={{ color: 'blue' }}>{this.state.pageTitle}</h1>

          <button onClick={this.handleChangeTitle.bind(this, 'Changed!')}>Change title</button>

          <Car
            name={cars[0].name}
            year={cars[0].year}
            onChangeTitle={this.handleChangeTitle.bind(this, cars[0].name)} /*better use bind!!!!*/
          />
          <Car
            name={cars[1].name}
            year={cars[1].year}
            onChangeTitle={() => this.handleChangeTitle(cars[1].name)}
          />
          <Car
            name={cars[2].name}
            year={cars[2].year}
            onChangeTitle={() => this.handleChangeTitle(cars[2].name)}
          />
        </div>

        <p className='App'>How are you?</p>
      </div>
    )
  }
}

// STOP AT 3 FOLDER 5 LESSON





























// function App() {
//   state = {
//     cars: [
//       { name: 'Ford', year: 2018 },
//       { name: 'Audi', year: 2016 },
//       { name: 'Mazda', year: 2008 }
//     ]
//   }

//   render() {
//     const divStyle = {
//       'textAlign': 'center',
//     }

//     const cars = this.state.cars

//     return (
//       <div>
//         <div style={divStyle}>
//           <h1 style={{ color: 'blue' }}>Hello World</h1>

//           <Car name={cars[0].name} year={cars[0].year} />
//           <Car name={cars[1].name} year={cars[1].year} />
//           <Car name={cars[2].name} year={cars[2].year} />
//         </div>

//         <p className='App'>How are you?</p>
//       </div>


//     )

//   }

// }

export default App;
