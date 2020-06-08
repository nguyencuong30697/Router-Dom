import React from "react";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { textState, textState1 } from "./atom";

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const charCountState2 = selector({
  key: "charCountState2", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState1);
    return text;
  },
});

export function CharacterCount() {
  const count = useRecoilValue(charCountState);
  const count2 = useRecoilValue(charCountState2);
  return (
    <React.Fragment>
      <div>Character Count: {count}</div>
      <div>Character Count2: {count2}</div>
    </React.Fragment>
  );
}
