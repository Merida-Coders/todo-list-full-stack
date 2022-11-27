import { parse } from "postcss";
import { useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const localItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localItem) {
    parsedItem = JSON.stringify(initialValue);
    localStorage.setItem(localItem, parsedItem);
  } else {
    parsedItem = JSON.parse(localItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
};
