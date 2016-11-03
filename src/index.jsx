import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import EditFormula from './EditFormula'

class App extends Component {
  render() {
    return (
      <EditFormula />  
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
