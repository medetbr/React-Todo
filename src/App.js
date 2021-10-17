import TodoForm from "./components/TodoForm";
import "./components/todo.css"
import React,{ useState } from "react";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo,...todos])
  }
  return (
    <div className="App">
      <p className="appTitle">React Todo</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
