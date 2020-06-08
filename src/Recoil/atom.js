import { atom } from "recoil";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const textState1 = atom({
  key: "textState1", // unique ID (with respect to other atoms/selectors)
  default: "abc", // default value (aka initial value)
});
