import React from "react";
import DisplayFilter from "./DisplayFilter";
import AddTodo from "./AddTodo";

export default class Toolbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container"
      id="toolbar">
        <DisplayFilter />
        <AddTodo />
      </div>
    );
  }
}
