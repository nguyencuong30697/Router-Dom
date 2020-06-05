import React, { Component } from "react";

class PureComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Check state trước khi update;
    return this.props.value === nextProps.value ? false : true;
  }

  render() {
    const { value } = this.props;
    return (
      <div>
        <div>{value}</div>
      </div>
    );
  }
}

export default PureComponent;
