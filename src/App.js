import React, { Component } from 'react';
import './App.css';
import Nav from './containers/nav';
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="App">
          redux and react
        </div>
      </div>
    );
  }
}

export default App;
