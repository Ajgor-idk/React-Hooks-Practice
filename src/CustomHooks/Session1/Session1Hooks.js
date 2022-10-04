import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useUpdateLogger } from "./useUpdateLogger";

export function Session1Hooks() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <input
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}
