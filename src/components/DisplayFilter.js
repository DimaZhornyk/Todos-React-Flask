import React from "react";
import { changeFilter } from "../actions/FilterActions";
import { connect } from "react-redux";

function Filter(props) {
  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={() => props.changeFilter("SHOW_ALL")}
        style={{
          backgroundColor:
            props.visibilityFilter === "SHOW_ALL" ? "#eeeeee" : "transparent",
        }}
        className="filter-option"
      >
        <span>All</span>
      </div>
      <div
        onClick={() => props.changeFilter("SHOW_COMPLETED")}
        style={{
          backgroundColor:
            props.visibilityFilter === "SHOW_COMPLETED"
              ? "#eeeeee"
              : "transparent",
        }}
        className="filter-option"
      >
        <span>Completed</span>
      </div>
      <div
        onClick={() => props.changeFilter("SHOW_ACTIVE")}
        style={{
          backgroundColor:
            props.visibilityFilter === "SHOW_ACTIVE"
              ? "#eeeeee"
              : "transparent",
        }}
        className="filter-option"
      >
        <span>Active</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (filter) => {
      dispatch(changeFilter(filter));
    },
  };
};

const TimeFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default TimeFilter;
