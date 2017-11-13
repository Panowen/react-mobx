import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';

class Test extends Component {
  handleClick() {
    axios
      .post('/api/')
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log('err');
      });
  }

  render() {
    return (
      <div>
        <Button type="error" onClick={ () => this.handleClick() }>
          this is slot
        </Button>
        <div> this is a test page 1w</div>
      </div>
    );
  }
}

export default Test;
