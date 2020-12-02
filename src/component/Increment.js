import React, { useState } from 'react';
import '../counter.css';

class Counter extends React.Component {
    state = { count: 0 }
  
    increment = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
  
    decrement = () => {
      this.setState({
        count: this.state.count - 1
      });
    }
  
    render() {
      return (
        <div>
          <h2>Counter</h2>
          <div>
            <span class="dot" onClick={this.decrement}>-</span>
            <span className="content-counter">{this.state.count}</span>
            <span class="dot" onClick={this.increment}>+</span>
          </div>
        </div>
      )
    }
  }

  export default Counter;