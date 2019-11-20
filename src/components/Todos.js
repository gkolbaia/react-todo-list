import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        todo={todo}
        markComplete={this.props.markComplete}
        key={todo.id}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
// Proptypes
Todos.prototypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
export default Todos;
