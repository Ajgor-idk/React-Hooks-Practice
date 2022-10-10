import React from "react";
import { useLocalStorage, useSessionStorage } from "./useStorage";

export function StorageComponent() {
  const [name, setName, removeName] = useLocalStorage("name", "Igor")
  const [age, setAge, removeAge] = useSessionStorage("age", 17)

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
}
