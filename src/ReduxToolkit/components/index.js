import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, addTodo2 } from "../reducers/todos";
import { createSelector } from "@reduxjs/toolkit";

const mapDispatch = { addTodo, addTodo2 };
const demoSelect = createSelector(
  (state) => state.todos,
  (todos) => {
    return todos;
  }
);
const mapState = (state) => {
  return {
    data: demoSelect(state),
  };
};
let count = 0;

class index extends Component {
  render() {
    console.log(`Posts render ${++count}`);
    return (
      <div>
        <div>{this.props.data.length}</div>
        <button
          onClick={() => {
            this.props.addTodo({ id: "1", text: "ABC" });
          }}
        >
          Push Add Todos
        </button>
        <button
          onClick={() => {
            this.props.addTodo2({ id: "2", text: "ABC2" });
          }}
        >
          Push Add Todos 2
        </button>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(index);
