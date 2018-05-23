import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {connect} from 'react-redux';

import Nav from './containers/nav';
import Signin from './containers/signin'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div >
            <Route exact  path = '/signin' component = {Signin} />
            <Route path='/signup'component = {Signin} />
           </div>  
        </div>
      </Router>
    );
  }
}
function mapStateToProps({login}){
  return {login};
}

export default connect(mapStateToProps)(App);
