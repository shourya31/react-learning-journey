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
          return <li key={index}>{todos}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
