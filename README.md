# counter-case-study-for-UseCallback-and-UseMemo

## Simple project to study React Hooks `useCallback` and `useMemo`

This simple counter project was created to explore how React Hooks `useCallback` and `useMemo` work in practice.

---

## 🧠 What is Memoization?

**Memoization** is a programming technique that stores the results of expensive function calls so they can be reused later, without recalculating the same values multiple times.

---

## ⚙️ `useCallback`

`useCallback` is a React Hook that memoizes a **function**, ensuring that its reference does not change unless its dependencies do.  
It helps optimize performance by preventing unnecessary re-executions or re-renders of child components that receive that function as a prop.

---

## ⚡ `useMemo`

`useMemo` is a React Hook that memoizes the **result of a function**, recalculating it only when its dependencies change.  
This prevents expensive computations from running on every render.

---

## 🧩 In this example

The project includes:

- a **counter** that increments when you click the button,
- an **input field** that displays the length of the entered text,
- and a **child component button** to test re-render behavior.

### `useMemo` usage

I used `useMemo` to memoize the result of `generateNumbers()`, so the calculation only happens once — at the component's initial mount.  
Without `useMemo`, the heavy computation inside `generateNumbers()` would be executed on every render.

```ts
const numbers = useMemo(() => generateNumbers(2000000), []);
```

### `useCallback` usage

I used useCallback to memoize the handleClick function, which handles the button click in the child component.
Without it, the function would be recreated every time the parent re-renders, causing the child to re-render unnecessarily.
With an empty dependency array, the function reference never changes.

```ts
const handleClick = useCallback(() => {
  console.log("Child Clicked!!!");
}, []);
```

### ✅ in few words

Both hooks help improve performance by preventing useless computations or renders:

**-useMemo → memoizes values
-useCallback → memoizes functions**

### 💬 To test

If you remove useCallback or useMemo and open the browser console, you can observe when and why React triggers extra renders — that’s the best way to understand them in action.

_by Manuel Cau
Made as part of a personal learning exercise on React performance optimization._
