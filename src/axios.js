import React, { Component } from 'react';
import axios from 'axios';

class Axios extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .post('/api/login', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }> click me</button>
      </div>
    );
  }
}

export default Axios;
