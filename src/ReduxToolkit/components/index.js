import React, { Component } from "react";
import Show from "./show";
import Counter from "./counter";

class ShowPost extends Component {
  render() {
    return (
      <div>
        <Show />
        <Counter />
      </div>
    );
  }
}

export default ShowPost;
