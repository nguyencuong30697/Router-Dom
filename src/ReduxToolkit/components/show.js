import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, addTodo2 } from "../reducers/todos";
import { createSelector } from "@reduxjs/toolkit";

const mapDispatch = { addTodo, addTodo2 };

//Ham selector khong viet duoc (state) => state.todos.map(...) vi moi mot lan map la mot array hay object moi roi
const demoSelect = createSelector(
  (state) => state.todos,
  (todos) => {
    return todos.map((e) => e.id);
  }
);

const mapState = (state) => {
  return {
    // data: state.todos.map((e) => e.id), // Se render lai sau moi lan couter gui increment len
    data: demoSelect(state),
  };
};

let count = 0;

class ShowPost extends Component {
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

export default connect(mapState, mapDispatch)(ShowPost);
