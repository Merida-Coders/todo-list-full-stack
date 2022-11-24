import { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Button } from "./components/Button";
import { Todo } from "./components/Todo";
import { TodoContext } from "./context/TodoContext";

export default function App() {
  const { data } = useContext(TodoContext);
  return (
    <>
      <header className="flex justify-between">
        <h1>Todo List</h1>
        <Button text={"Add Todo"} />
      </header>
      <main className="flex flex-col">
        {data ? <h2>Your pending tasks</h2> : <h2>No tasks</h2>}
        <div className="flex flex-col">
          {data.map((todo) => (
            <Todo todo={{ ...todo }} />
          ))}
        </div>
        <button className="bg-blue-500 h-16 w-16 mt-10 mx-auto rounded-lg hover:bg-blue-600 border-2 border-black">
          Agregar
        </button>
      </main>
    </>
  );
}
