import React from "react";

const Todo = ({todo,removeTask}) => {
   
    const handleRemoveClick = () => {
        removeTask(todo.id)
    }
   
    return (
        <li className="taskListItem"><span>{todo.task}</span><span onClick={handleRemoveClick} className="removeTask">X</span></li>
    )
}
export default Todo