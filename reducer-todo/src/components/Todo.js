import React, { useState, useContext } from "react";
import moment from "moment";

import { TodoContext } from "../contexts/TodoContext";

const Todo = props => {
  const { dispatch } = useContext(TodoContext);
  const [time, setTime] = useState("");

  const handleClick = () => {
    const completedDate = moment().format("MMM Do YY");
    setTime(completedDate);
    dispatch({ type: "TOGGLE_COMPLETED", payload: props.todo.id });
  };

  return (
    <div
      className={`todoContainer${
        props.todo.completed ? " todoContainerCompleted" : ""
      }`}
    >
      <div
        onClick={handleClick}
        className={`todo${props.todo.completed ? " completed" : ""}`}
      >
        <p>{props.todo.item}</p>
      </div>
      {props.todo.completed && <p className="date">Completed: {time}</p>}
    </div>
  );
};

export default Todo;
