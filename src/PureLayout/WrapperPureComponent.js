import React, { Component } from "react";
import PureComponent from "./PureComponent";

class WrapperPureComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      a: "1",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Check state trước khi update;
    return true;
  }

  render() {
    return (
      <div>
        <PureComponent value={this.state.a} />
        <button
          onClick={() => {
            this.setState({ a: `${Number(this.state.a) + 1}` });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ a: `${Number(this.state.a)}` });
          }}
        >
          Don't do anything
        </button>
      </div>
    );
  }
}

export default WrapperPureComponent;
