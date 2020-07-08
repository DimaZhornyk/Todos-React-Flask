import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/TodoActions";
import DateAndTimePickers from "./TimePicker";
import "antd/dist/antd.css";
import { Input } from "antd";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.input = "";
    this.myRef = React.createRef(4);
  }

  render() {
    return (
      <div id="inputField">
        <DateAndTimePickers ref={this.myRef} />
        <form
          style={{ display: "flex" }}
          onSubmit={(e) => {
            e.preventDefault();
            if (!this.input.trim() || this.myRef.current.state.date == null) {
              return;
            }
            this.props.dispatch(
              addTodo([this.input, Date.parse(this.myRef.current.state.date)])
            );
            this.input = "";
            document.getElementById("input-line").setAttribute("value", "");
          }}
        >
          <Input
            allowClear
            onChange={(e) => (this.input = e.target.value)}
            placeholder="Todo"
            id="input-line"
          />
          <button
            type="submit"
            className="filter-option"
            style={{
              backgroundColor: "#ffffff",
              outline: "none",
              marginLeft: "15px",
              width: "150px",
            }}
          >
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
AddTodo = connect()(AddTodo);

export default AddTodo;
