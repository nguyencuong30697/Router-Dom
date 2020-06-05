import React, { Component } from "react";
import { InputNumber } from "antd";

class FibonacciNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberResult: 0,
    };
  }

  fiboNumber = (n) => {
    if (n < 2) {
      return n;
    }
    return this.fiboNumber(n - 1) + this.fiboNumber(n - 2);
  };

  onChange = (value) => {
    this.setState({
      numberResult: this.fiboNumber(value),
    });
  };

  render() {
    return (
      <div>
        <h1>Find Fibonacci Number</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InputNumber min={0} onChange={this.onChange} type="number" />
          <span style={{ marginLeft: "10px" }}>{this.state.numberResult}</span>
        </div>
      </div>
    );
  }
}

export default FibonacciNumber;
