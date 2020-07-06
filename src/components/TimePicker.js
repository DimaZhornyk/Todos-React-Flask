import React from "react";
import TextField from "@material-ui/core/TextField";

export default class DateAndTimePickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: null};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ date: event.target.value });
  }

  render() {
    return (
      <form className="makeStyles-container-3" noValidate>
        <TextField
          id="datetime-local"
          label="Deadline"
          type="datetime-local"
          className="makeStyles-textField-2"
          onChange={this.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }
}
