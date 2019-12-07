import React from "react";

import TodoList from "./components/TodoList";
import Form from "./components/Form";
import TodoContextProvider from "./providers/TodoContextProvider";

import "./App.css";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <h1>TodoList 2.0</h1>
        <Form />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
