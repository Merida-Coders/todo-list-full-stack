import { Button } from "./Button";

export const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between m-5">
      <div className="flex flex-col">
        <h3 className="text-lg text-black  m-1">{todo.name}</h3>
        <p className="text-base text-black  m-2">{todo.description}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-red-700 hover:bg-red-600 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Delete
        </button>
      </div>
    </div>
  );
};
