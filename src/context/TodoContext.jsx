import { createContext, useState } from "react";
import { data } from "../data/tasks";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  return (
    <TodoContext.Provider value={{ data }}>
      {props.children}
    </TodoContext.Provider>
  );
};
