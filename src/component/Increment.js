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
            <span class="dot" onClick={this.decrement}>-</span>
            <span className="content-counter">{this.state.count}</span><span class="counter-mb">Mb</span>
            <span class="dot" onClick={this.increment}>+</span>
          </div>
      )
    }
  }

  export default Counter;