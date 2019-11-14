import React, { useContext } from "react";
import Todo from "./Todo";

import { TodoContext } from "../contexts/TodoContext";

const TodoList = props => {
  const { state } = useContext(TodoContext);
  return (
    <div className="todosContainer">
      {state.length < 1 && <h2>Add Some Todos!</h2>}
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
