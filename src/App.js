import React, { Component } from 'react';
import Route from './routes';
import Axios from './axios';
import logo from '../static/logo.svg';

class App extends Component {
  render() {
    return (<div>Welcome to react112
      <img src={ logo } className="App-logo" alt="logo"/>
      <Axios/>
      <Route/>
    </div>);
  }
}

export default App;
