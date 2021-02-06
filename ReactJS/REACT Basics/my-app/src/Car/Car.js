import React from 'react'


export default (props) => (
    <div>
        <h3>Car name: {props.name} </h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)





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
  
      // const oldTitle = this.state.pageTitle //
  
      // const newTitle = oldTitle + ' (changed)'
  
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
              onChangeTitle={this.handleChangeTitle.bind(this, cars[0].name)}
            />
            <Car
              name={cars[1].name}
              year={cars[1].year}
              onChangeTitle={this.handleChangeTitle.bind(this, cars[1].name)}
            />
            <Car
              name={cars[2].name}
              year={cars[2].year}
              onChangeTitle={this.handleChangeTitle.bind(this, cars[2].name)}
            />
          </div>
  
          <p className='App'>How are you?</p>
        </div>
      )
    }
  }