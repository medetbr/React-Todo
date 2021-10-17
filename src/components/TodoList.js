import React from "react";
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return (
        <ul className="taskList">
           {todos.map(todo=> <Todo todo={todo} key={todo.id} />)} 
        </ul>
    )
}
export default TodoList