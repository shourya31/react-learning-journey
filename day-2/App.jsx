import { useState } from "react";

function App() {
  // 🧠 STATE (data)
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input === "") return;
  
    setTodos([...todos, input]);
    setInput("");
  };
  const deleteTodo =(indexToDelete)=>{
    const newTodos=todos.filter((_,index)=>index !==indexToDelete);
    setTodos(newTodos)
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />

      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todos,index)=>{
          return <li key={index} onClick={()=>deleteTodo(index)}>{todos}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
