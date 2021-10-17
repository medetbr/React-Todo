import TodoForm from "./components/TodoForm";
import "./components/todo.css"
import React,{ useState } from "react";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo,...todos])
  }
  const removeTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="App">
      <p className="appTitle">React Todo</p>
      <TodoForm addTodo={addTodo} />
      <TodoList removeTask={removeTask} todos={todos}/>
    </div>
  );
}

export default App;
