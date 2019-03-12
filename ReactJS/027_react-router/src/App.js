import React, { Component } from 'react';
import './App.css';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import Routers from './routers/routers';
import {
  BrowserRouter as Router,
  // Route,
  // Link
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Routers/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
