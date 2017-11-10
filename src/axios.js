import React, { Component } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';

@observer
class Axios extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.state.title += 1;
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
        <div> props.state.title: { this.props.state.title } </div>
        <button onClick={ this.handleClick }> click me</button>
      </div>
    );
  }
}

export default Axios;
