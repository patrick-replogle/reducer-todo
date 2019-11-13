import React, { useReducer } from "react";

import { todoReducer, initialTodos } from "./reducers/todoReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  console.log(state);
  return <div className="App"></div>;
}

export default App;
