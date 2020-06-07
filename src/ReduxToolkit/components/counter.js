import React from "react";
import { connect } from "react-redux";
import { increment } from "../reducers/counter";

class Counter extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.increment();
    }, 500);
  }
  render() {
    // console.log("render Counter");

    return (
      <div>
        <h3>Count: {this.props.count}</h3>
      </div>
    );
  }
}

const mapState = (state) => ({ count: state.counter });
const mapDispatch = { increment };

export default connect(mapState, mapDispatch)(Counter);
