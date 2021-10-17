import React, { useState } from "react";

const TodoForm = () => {
    
    const [todo, setTodo] = useState({
        id:"",
        task: "",
        complated: false
    })

    const handleTaskInputChancge = (e) => {
        setTodo({...todo,task:e.target.value})
    }
    return (
        <form className="todoForm">
            <input className="addTaskInput" onChange={handleTaskInputChancge} type="text" />
            <button type="submit" className="addButton">Add</button>
        </form>
    )
}
export default TodoForm