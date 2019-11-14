import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todosContainer">
      {props.todos.length < 1 && <h2>Add Some Todos!</h2>}
      {props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
