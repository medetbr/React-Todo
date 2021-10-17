import React from "react";

const Todo = ({todo,removeTask,complatedTask}) => {
   
    const handleRemoveClick = () => {
        removeTask(todo.id)
    }
    const handleCheckToggle = () => {
        complatedTask(todo.id)
    }
    return (
        <li className="taskListItem"><span className={`${todo.complated && "complatedTask"}`}>{todo.task}</span>
            <div>
                <input type="checkbox" className="inputToggle" onClick={handleCheckToggle} defaultChecked={todo.complated}/>
            <span onClick={handleRemoveClick} className="removeTask">X</span>
          </div>
        </li>
    )
}
export default Todo