// export default App;
/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import './_app.js';
import Shoppingadd from '../components/Shoppingadd.js';
import Back from '../components/Back';

class List extends Component {
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
      <div className="app">
        <div className="Body">
          <Shoppingadd />
          <Back />
        </div>
        <style jsx>
          {`
            
            }
            .Body {
              min-height: 100vh;

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: #6dd2dc52;
          `}
        </style>
      </div>
    );
  }
}
export default List;
