import { useState } from "react";

export function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(elem) {
    setArray((arr) => [...arr, elem]);
  }

  function filter(callback) {
    setArray((arr) => arr.filter(callback));
  }

  function update(index, newElement) {
    setArray((arr) => [
      ...arr.slice(0, index),
      newElement,
      ...arr.slice(index + 1, arr.lenght - 1),
    ]);
  }

  function remove(index) {
    setArray((arr) => [
      ...arr.slice(0, index),
      ...arr.slice(index + 1, arr.lenght - 1),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}
