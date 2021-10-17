import TodoForm from "./components/TodoForm";
import "./components/todo.css"
import React,{ useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo,...todos])
  }
  useEffect(() => {
    if (localStorage.getItem("save")) {
      setTodos(JSON.parse(localStorage.getItem("save")))
    }
    localStorage.setItem("save",JSON.stringify(todos))
  },[])

  useEffect(() => {
    localStorage.setItem("save",JSON.stringify(todos))
  },[todos])
  const removeTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const complatedTask = (id) => {
    setTodos(todos.map(todo => {if (todo.id === id) {
      return {...todo,complated: !todo.complated}
    }
      return todo;
    }))
  }
  return (
    <div className="App">
      <p className="appTitle">React Todo</p>
      <TodoForm addTodo={addTodo} />
      <TodoList complatedTask={complatedTask} removeTask={removeTask} todos={todos}/>
    </div>
  );
}

export default App;
