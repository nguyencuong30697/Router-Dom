import React, { Component } from "react";
import Hover from "./Components/Hover";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";

class RenderComponents extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "20px" }}
      >
        <Hover>{(hovering) => <ComponentA hovering={hovering} />}</Hover>
        <Hover>{(hovering) => <ComponentB hovering={hovering} />}</Hover>
        {/* <Hover render={(hovering) => <ComponentB hovering={hovering} />} />  
            Dùng kiểu này thì trong Hover phải là this.props.render /
            / Còn cách trên là this.props.children         
        */}
      </div>
    );
  }
}

export default RenderComponents;
