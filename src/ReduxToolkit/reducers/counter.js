import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      let number = state + 1;
      return number;
    },
  },
});

export const { increment } = couterSlice.actions;

export default couterSlice.reducer;
