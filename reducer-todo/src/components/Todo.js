import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.dispatch({type: 'TOGGLE_COMPLETED', payload: })
    }

    return(
        <div onClick={handleClick} className={`todo ${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.item}</p>
        </div>
    )
}

export default Todo;