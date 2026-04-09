# Day 2 - Todo App Logic

## 🧠 What we built

- Add Todo
- Delete Todo
- Toggle Complete

---

## 🔹 Add Todo

setTodos([...todos, input])

- old items + new item
- creates new array

---

## 🔹 Delete Todo

todos.filter((_, index) => index !== indexToDelete)

- removes selected item

---

## 🔹 Toggle Todo

{ text: "task", done: false }

- object structure
- done → true/false

---

## 🔹 Key Learning

- State drives UI
- Never mutate state
- Always create new array/object

---

## 🚀 Outcome

Now we have a working Todo App with core features
