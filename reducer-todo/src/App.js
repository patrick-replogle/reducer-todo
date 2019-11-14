import React, { useReducer } from "react";

import { todoReducer, initialTodos } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <div className="App">
      <h1>TodoList 2.0</h1>
      <Form dispatch={dispatch} />
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
