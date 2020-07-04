// export default App;
/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import './style.css';
import Shoppingadd from './components/Shoppingadd.js';

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Body">
          <Shoppingadd />
        </div>
      </div>
    );
  }
}
export default App;
