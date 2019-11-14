import React from "react";

const Todo = props => {
  const handleClick = () => {
    props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.todo.id });
  };

  return (
    // <div className="todoContainer">
    <div
      onClick={handleClick}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.item}</p>
    </div>
    // <button onClick={() => props.dispatch({ type: "EDIT_TODO" })}>
    //   Edit
    // </button>
    // </div>
  );
};

export default Todo;
