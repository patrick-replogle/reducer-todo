import React, { useReducer } from "react";

import { todoReducer, initialTodos } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <div className="App">
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
