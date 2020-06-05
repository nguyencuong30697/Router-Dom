import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    addTodo2(state, action) {
      return state;
    },
  },
});

export const { addTodo, addTodo2 } = todosSlice.actions;

export default todosSlice.reducer;
