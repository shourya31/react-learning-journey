# Day 4- Deep Understanding of React (State, Actions, Data Flow)

## 🧠 Focus of Today

Today was about going beyond syntax and understanding:

- How React actually works internally
- How state controls everything
- How user actions flow through the system

---

# 🔥 Core Idea (MOST IMPORTANT)

> React does NOT work like traditional JavaScript (DOM manipulation)

In normal JS:

```js
document.querySelector("ul").appendChild(li);


🔹 What is State?

State is the data your app remembers

🔍 In our Todo App:
const [input, setInput] = useState("");
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState("all");
🧠 Meaning:
State	Purpose
input	user typing
todos	list of tasks
filter	what to show
🔥 Important Insight
State = single source of truth

👉 UI always depends on state

🧱 Step 2: Actions (Functions that change state)
🔹 addTodo
const addTodo = () => {
  if (input.trim() === "") return;

  setTodos([...todos, { text: input, done: false }]);
  setInput("");
};
🧠 Explanation:
Take input
Create new object
Add to array
Clear input
🔹 deleteTodo
const deleteTodo = (indexToDelete) => {
  const newTodos = todos.filter((_, index) => index !== indexToDelete);
  setTodos(newTodos);
};
🧠 Explanation:
Loop through items
Remove matching index
Return new array
🔹 toggleTodo
const toggleTodo = (indexToToggle) => {
  const newTodos = todos.map((todo, index) => {
    if (index === indexToToggle) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  });

  setTodos(newTodos);
};
🧠 Explanation:
Find clicked item
Copy object
Flip done value
🧠 WHY WE USE SPREAD (...)
{ ...todo, done: !todo.done }
❓ Why not modify directly?
todo.done = true; ❌

👉 React may NOT detect change

✅ Correct:
Create new object → React detects change → re-render
🧱 Step 3: Data Flow (VERY IMPORTANT)
🔥 Full Flow:
User Action
   ↓
Event Trigger (onClick / onChange)
   ↓
Function runs
   ↓
State updates (setState)
   ↓
React re-renders component
   ↓
UI updates automatically
🔍 Example (Add Todo)
User types "study"
→ Click Add
→ addTodo() runs
→ todos updated
→ React re-renders
→ UI shows "study"
🔍 Example (Toggle Todo)
User clicks task
→ toggleTodo() runs
→ done flips true/false
→ React re-renders
→ UI shows line-through
🧱 Step 4: Rendering Logic
🔹 map()
todos.map((todo) => (
  <li>{todo.text}</li>
))

👉 Converts data → UI

🔹 filter()
const filteredTodos = todos.filter((todo) => {
  if (filter === "completed") return todo.done;
  if (filter === "pending") return !todo.done;
  return true;
});
🧠 Meaning:
Data decide karta hai UI kya show karega
⚠️ Mistakes I Faced
Forgetting return inside map()
Confusing function call vs reference
Trying to mutate state directly
Fear of writing code without seeing
