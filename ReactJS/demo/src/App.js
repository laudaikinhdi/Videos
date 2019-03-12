import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One(){
  return(
	<div>
		<h2>Cách số 1</h2>
		<h3>Cách số 2</h3>
	</div>
  ) 
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
		  <One/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
