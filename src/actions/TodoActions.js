export const deleteTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id: id,
  };
};

export const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    id: id,
  };
};

export const addTodo = (body) => {
  return {
    type: "ADD_TODO",
    body: body,
  };
};
