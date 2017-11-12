import React, { Component } from 'react';
import { Button } from 'antd';

class Test extends Component {
  render() {
    return (
      <div>
        <Button type="error">
          this is slot
        </Button>
        <div> this is a test page 1w</div>
      </div>
    );
  }
}

export default Test;
