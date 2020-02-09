import React from 'react'
import './App.css'

class App extends React.Component {
  state = { serverMessage: '' }

  componentDidMount() {
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }))
  }

  render() {
    return (
      <div id="demo">
        <h1>Hello from client/src/App.js</h1>
        <h1>{this.state.serverMessage}</h1>
      </div>
    )
  }
}

export default App
