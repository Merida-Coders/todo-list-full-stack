import { Button } from "./Button";
import { FaWhatsapp } from "react-icons/fa";

export const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between m-2">
      <div className="flex flex-col">
        <h3 className="text-3xl text-black  m-1">{todo.name}</h3>
        <p className="text-xl text-black  m-2">{todo.description}</p>
      </div>
      <div className="flex">
        <button className="bg-red-700 rounded-lg my-auto">Delete</button>
      </div>
    </div>
  );
};
