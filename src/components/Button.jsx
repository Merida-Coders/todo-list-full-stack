export const Button = ({ text }) => {
  return (
    <button className="bg-green-700 items-center justify-center text-white hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" alt="Add Todo">
      {text}
    </button>
  );
};
