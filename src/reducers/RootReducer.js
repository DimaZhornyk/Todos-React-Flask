import { setTodos } from "../requests";

let initState = {
  todos: [],
  visibilityFilter: "SHOW_ALL",
  maxId: 0,
  token: null,
  login: null,
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      let newTodos = [
        ...state.todos,
        {
          id: state.maxId + 1,
          body: action.body[0],
          completed: false,
          deadline: action.body[1],
        },
      ];
      setTodos(state.token, newTodos, state.maxId + 1).catch((res) => {
        sessionStorage.clear();
        window.location.href = "/login";
      });
      return {
        ...state,
        todos: newTodos,
        maxId: state.maxId + 1,
      };
    case "REMOVE_TODO":
      let filteredTodos = state.todos.filter((todo) => todo.id !== action.id);
      setTodos(state.token, filteredTodos, state.maxId).catch((res) => {
        sessionStorage.clear();
        window.location.href = "/login";
      });
      return {
        ...state,
        todos: filteredTodos,
      };
    case "COMPLETE_TODO":
      let changedTodos = state.todos.map((todo) => {
        if (todo.id === action.id) todo.completed = !todo.completed;
        return todo;
      });
      setTodos(state.token, changedTodos, state.maxId).catch((res) => {
        sessionStorage.clear();
        window.location.href = "/login";
      });
      return {
        ...state,
        todos: changedTodos,
      };
    case "CHANGE_FILTER":
      return {
        ...state,
        visibilityFilter: action.filter,
      };
    case "SET_JWT":
      return {
        ...state,
        token: action.token,
      };
    case "SET_LOGIN":
      return {
        ...state,
        login: action.login,
      };
    case "SET_STATE":
      return {
        todos: action.todos,
        visibilityFilter: "SHOW_ALL",
        maxId: action.maxId,
        token: state.token,
        login: state.login,
      };
    default:
      return state;
  }
}
