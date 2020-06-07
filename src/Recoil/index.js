import React, { Component } from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./characterCounter";

class index extends Component {
  render() {
    return (
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    );
  }
}

export default index;
