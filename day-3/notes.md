
# Day 3 - Filters (All / Completed / Pending)

## 🧠 Goal

Show tasks based on status:
- All tasks
- Completed tasks
- Pending tasks

---

## 🔹 Step 1: Add filter state

const [filter, setFilter] = useState("all")

- filter → current view
- values:
  - "all"
  - "completed"
  - "pending"

---

## 🔹 Step 2: Filter logic

const filteredTodos = todos.filter((todo) => {
  if (filter === "completed") return todo.done;
  if (filter === "pending") return !todo.done;
  return true;
});

---

## 🔹 Step 3: Update UI

Use filteredTodos instead of todos:

filteredTodos.map(...)

---

## 🔹 Step 4: Add buttons

<button onClick={() => setFilter("all")}>All</button>
<button onClick={() => setFilter("completed")}>Completed</button>
<button onClick={() => setFilter("pending")}>Pending</button>

---

## 🧠 How it works

User clicks button → filter state changes → 
React re-renders → filteredTodos updates → UI changes

---

## 🔹 Example

todos = [
  { text: "study", done: true },
  { text: "gym", done: false }
]

filter = "completed"

👉 Output:
["study"]

---

## 🔥 Key Learning

- UI depends on state (filter + todos)
- We don’t change UI manually
- We change filter → React updates UI

---

## 🚀 Outcome

Now Todo App supports:
- Add
- Delete
- Toggle
- Filter (All / Completed / Pending)
