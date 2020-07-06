export const setJwtToken = (token) => {
  return {
    type: "SET_JWT",
    token: token,
  };
};

export const setState = (todos, maxId) => {
  return {
    type: "SET_STATE",
    todos: todos,
    maxId: maxId,
  };
};

export const setLogin = (login) => {
  return {
    type: "SET_LOGIN",
    login: login,
  };
};

