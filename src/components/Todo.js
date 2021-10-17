import React from "react";

const Todo = ({todo}) => {
    return (
        <li className="taskListItem">{todo.task}</li>
    )
}
export default Todo