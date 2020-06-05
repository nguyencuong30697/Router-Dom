import React, { Component } from "react";

class ComponentB extends Component {
  render() {
    return (
      <>
        {this.props.hovering === true ? <span>Component B</span> : null}
        <div
          style={{
            height: "200px",
            width: "300px",
            backgroundColor: "red",
            marginLeft: "10px",
          }}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
        ></div>
      </>
    );
  }
}

export default ComponentB;
