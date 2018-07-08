import React, { Component } from 'react'
import './App.css'
import {
  IS_LULA_FREE,
  IS_LULA_FREE_QUESTION,
  LULA_FREE_MESSAGE,
  LULA_NOT_FREE_MESSAGE,
} from './constants.js'

class App extends Component {
  render() {
    return (
      <div className={`App ${IS_LULA_FREE ? 'App-free' : 'App-not-free'}`}>
        <header className="App-header">
          <h1 className="App-title">{IS_LULA_FREE_QUESTION}</h1>
        </header>
        <p className="App-intro">
          {IS_LULA_FREE ? LULA_FREE_MESSAGE : LULA_NOT_FREE_MESSAGE}
        </p>
      </div>
    )
  }
}

export default App
