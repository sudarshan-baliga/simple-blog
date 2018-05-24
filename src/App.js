import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom'
import {connect} from 'react-redux';

import Nav from './containers/nav';
import Signin from './containers/signin'
import SigninHelper from './containers/SigninHelper';
import Profile from './containers/profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav login = {this.props.login.loggedin}/>
          <div>
            <Route exact  path = '/' render={ ()=> (this.props.login.loggedin === 'YES' ?
              <Redirect to="/Profile"/> : <Redirect to = "/signin"/> ) }/>
            <Route   path = '/signin' render={()=><SigninHelper loggedin ={this.props.login.loggedin} />}/>
            <Route path='/signup'component = {Signin} />
            <Route path = '/profile' render = { ()=> (this.props.login.loggedin === 'YES' ?
              <Profile /> : <Redirect to = "/signin"/> ) }/>
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
