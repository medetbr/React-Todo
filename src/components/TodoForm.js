import React, { useState } from "react";
import { v4 as uuidv4}  from 'uuid';
const TodoForm = ({addTodo}) => {
    
    const [todo, setTodo] = useState({
        id:"",
        task: "",
        complated: false
    })
   
    const handleTaskInputChancge = (e) => {
        setTodo({ ...todo, task: e.target.value })      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() })
            setTodo({...todo,task:""})
        }
        
    }
    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <input className="addTaskInput" value={todo.task} onChange={handleTaskInputChancge} type="text" />
            <button type="submit" className="addButton">Add</button>
        </form>
    )
}
export default TodoForm