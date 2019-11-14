import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todosContainer">
      {props.todos.length < 1 && <h2>Add Some Todos!</h2>}
      {props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />;
      })}
      <button onClick={() => props.dispatch({ type: "CLEAR_TODO" })}>
        Delete Todos
      </button>
    </div>
  );
};

export default TodoList;
