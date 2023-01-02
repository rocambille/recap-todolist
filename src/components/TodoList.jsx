import { useRef, useState } from "react";

import Todo from "./Todo";

let newId = 3;

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, checked: true, action: "code" },
    { id: 2, checked: false, action: "pause" },
  ]);

  const inputRef = useRef();

  return (
    <ul>
      <li>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            setTodos([
              {
                id: newId++,
                checked: false,
                action: inputRef.current.value,
              },
              ...todos,
            ]);

            inputRef.current.value = "";
          }}
        >
          <input ref={inputRef} type="text" />
          <button type="submit">+</button>
        </form>
      </li>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            checked={todo.checked}
            action={todo.action}
            toggle={() => {
              setTodos(
                todos.map((newTodo) => {
                  if (newTodo.id === todo.id) {
                    return { ...todo, checked: !todo.checked };
                  }
                  return newTodo;
                })
              );
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
