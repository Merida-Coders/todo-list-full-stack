import { createContext, useState } from "react";
import { data } from "../data/tasks";
import { useLocalStorage } from "./localStorage";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, saveTodos] = useLocalStorage("todos_v1", []);

  const addTodo = (todo) => {
    data.push(todo);
    saveTodos(data);
  };

  return (
    <TodoContext.Provider value={{ data, addTodo, todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};
