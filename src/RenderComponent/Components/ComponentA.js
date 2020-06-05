import React, { Component } from "react";

class ComponentA extends Component {
  render() {
    return (
      <>
        {this.props.hovering === true ? <span>Component A</span> : null}
        <div
          style={{ height: "200px", width: "300px", backgroundColor: "black" }}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
        ></div>
      </>
    );
  }
}

export default ComponentA;
