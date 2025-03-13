// src/components/NqtTodoList.js
import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/NqtTodoReducer"; // Correct path
import NqtAddTodo from "./NqtAddTodo"; // Correct path
import NqtTodoItem from "./NqtTodoItem"; // Correct path

function NqtTodoList() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h2>Danh Sách Công Việc</h2>
      <NqtAddTodo dispatch={dispatch} />
      <ul>
        {todos.map((todo) => (
          <NqtTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default NqtTodoList;