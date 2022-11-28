import { useState, useContext } from "react";
import { Button } from "./components/Button";
import { Todo } from "./components/Todo";
import { TodoContext } from "./context/TodoContext";

export default function App() {
  const { data } = useContext(TodoContext);
  return (
    <>
      <header className="container flex justify-between p-4">
        <h1 className="flex items-center justify-center">Agenda</h1>
        <Button text={"Agregar Tarea"} />
      </header>
      <main className="container flex flex-col">
        <div className="flex flex-col">
        {data ? <h2 className="px-5">Tareas Pendientes</h2> : <h2>No hay tareas</h2>}  
          {data.map((todo) => (
            <Todo todo={{ ...todo }} />
          ))}
        </div>
      </main>
    </>
  );
}
