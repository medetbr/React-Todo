import TodoForm from "./components/TodoForm";
import "./components/todo.css"
import React,{ useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo,...todos])
  }
  return (
    <div className="App">
      <p className="appTitle">React Todo</p>
     <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
