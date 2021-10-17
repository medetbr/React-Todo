import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,removeTask}) => {
    return (
        <ul className="taskList">
           {todos.map(todo=> <Todo todo={todo} removeTask={removeTask} key={todo.id} />)} 
        </ul>
    )
}
export default TodoList