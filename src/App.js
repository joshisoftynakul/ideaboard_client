import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
        
          I<span className="coloring">D</span><span className="coloring">E</span><span className="coloring">A</span> BOAR<span className="coloring">D</span>
          </h1>
        </header>
       	<IdeasContainer />
      </div>
    );
  }
}

export default App