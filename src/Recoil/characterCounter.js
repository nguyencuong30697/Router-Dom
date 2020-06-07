import React from "react";
import TextInput, { CharacterCount } from "./textInput";

class characterCounter extends React.Component {
  render() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }
}

export default characterCounter;
