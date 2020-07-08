import VisibleTodoList from "../containers/VisibleTodoList";
import Toolbar from "./Toolbar";
import React from "react";
import { connect } from "react-redux";
import { setJwtToken, setState } from "../actions/JwtActions";
import { getTodos } from "../requests";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";

function MainPage(props) {
  React.useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      props.history.push("/login");
    }
    getTodos(sessionStorage.getItem("token"))
      .then((res) => props.setState(res.todos, res.maxId))
      .catch((res) => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        props.history.push("/login");
      });
  });

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={sessionStorage.getItem("username")}
        extra={[
          <div
            className="filter-option"
            style={{ width: "100px", backgroundColor: "#e1e1f5" }}
            onClick={() => {
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("username");
              props.history.push("/login");
            }}
          >
            Log out
          </div>,
        ]}
      />
      <Toolbar />
      <VisibleTodoList />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setJwt: (token) => {
      dispatch(setJwtToken(token));
    },
    setState: (todos, maxId) => dispatch(setState(todos, maxId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
