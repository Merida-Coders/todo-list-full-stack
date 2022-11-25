import { useState, useContext } from "react";
import { Button } from "./components/Button";
import { Todo } from "./components/Todo";
import { TodoContext } from "./context/TodoContext";

export default function App() {
  const { data } = useContext(TodoContext);
  return (
    <>
      <header className="container flex justify-between p-4">
        <h1 className="flex items-center justify-center">Todo List</h1>
        <Button text={"Add Todo"} />
      </header>
      <main className="container flex flex-col">
        <div className="flex flex-col">
        {data ? <h2 className="px-5">Your pending tasks</h2> : <h2>No tasks</h2>}  
          {data.map((todo) => (
            <Todo todo={{ ...todo }} />
          ))}
        </div>
      </main>
    </>
  );
}
