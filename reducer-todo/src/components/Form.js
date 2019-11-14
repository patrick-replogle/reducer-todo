import React, { useState } from "react";

const Form = props => {
  const [todo, setTodo] = useState({ item: "" });

  const handleChange = e => {
    setTodo({ item: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.item !== "") {
      props.dispatch({ type: "ADD_TODO", payload: todo.item });
      setTodo({ item: "" });
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={todo.item}
          placeholder="Add a Todo!"
          name="todo"
        />
        <button>Add Todo</button>
      </form>
      <button onClick={() => props.dispatch({ type: "CLEAR_TODO" })}>
        Delete Todos
      </button>
    </div>
  );
};

export default Form;
