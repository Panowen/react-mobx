import React, { Component } from 'react';
import { observable } from 'mobx';
import Route from './routes';
import Axios from './axios';
import logo from '../static/logo.svg';

const state = observable({
  title: '123123',
});

class App extends Component {
  render() {
    return (<div>Welcome to react112
      <img src={ logo } className="App-logo" alt="logo"/>
      <Axios state={ state }/>
      <Route/>
    </div>);
  }
}

export default App;
