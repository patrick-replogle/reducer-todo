import React, { useReducer } from "react";

import { todoReducer, initialTodos } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { TodoContext } from "./contexts/TodoContext";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>TodoList 2.0</h1>
        <Form />
        <TodoList todos={state} dispatch={dispatch} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
