import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,removeTask,complatedTask}) => {
    return (
        <ul className="taskList">
           {todos.map(todo=> <Todo todo={todo} complatedTask={complatedTask} removeTask={removeTask} key={todo.id} />)} 
        </ul>
    )
}
export default TodoList