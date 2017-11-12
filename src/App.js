import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Route from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
        </Helmet>
        <Route/>
      </div>
    );
  }
}

export default App;
