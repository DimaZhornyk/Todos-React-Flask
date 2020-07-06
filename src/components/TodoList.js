import React from "react";
import Todo from "./Todo";
import { chunk } from "underscore/modules/index";
import { Row } from "antd";
import "antd/dist/antd.css";

export default class TodoList extends React.Component {
  render() {
    let todos = this.props.todos;
    let splitted = chunk(
      todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => {
            this.props.deleteTodo(todo.id);
          }}
          onComplete={() => this.props.completeTodo(todo.id)}
        />
      )),
      3
    );
    return (
      <div className="site-card-wrapper">
        {splitted.map((chunk) => (
          <Row gutter={16}>{chunk}</Row>
        ))}
      </div>
    );
  }
}
