import { useState, useContext } from "react";
import { Button } from "./components/Button";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./context/TodoContext";

export default function App() {
  const { todos, searchedTodos } = useContext(TodoContext);
  const [addButtonState, setAddButtonState] = useState(false);

  const onToggle = () => {
    setAddButtonState(!addButtonState);
  };

  return (
    <>
      <header className="container flex justify-between p-4">
        <h1 className="flex items-center justify-center">Todo List</h1>
        <Button text={"Add Todo"} />
      </header>
      <main className="container flex flex-col">
        {addButtonState && <TodoForm />}
        <TodoSearch />
        <div className="flex flex-col">
          {searchedTodos ? (
            <h2 className="px-5">Your pending tasks</h2>
          ) : (
            <h2>No tasks</h2>
          )}
          {searchedTodos.map((todo) => (
            <Todo key={todo.id} todo={{ ...todo }} />
          ))}
        </div>
      </main>
    </>
  );
}
