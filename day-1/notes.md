# Day 1 - React Basics

## 🧠 What is React?
React is a library to build UI using components.

---

## 🔹 Core Idea
UI = function of state

---

## 🔹 useState

const [state, setState] = useState()

- state → data
- setState → update data

---

## 🔹 Input Handling

<input 
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>

Meaning:
User types → state updates

---

## 🔹 Key Understanding

We don’t touch UI directly.

Instead:
Data changes → React updates UI automatically
