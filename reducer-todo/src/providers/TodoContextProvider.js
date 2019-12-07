import React, { useReducer } from "react";

import { todoReducer, initialTodos } from "../reducers/todoReducer";
import { TodoContext } from "../contexts/TodoContext";

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
