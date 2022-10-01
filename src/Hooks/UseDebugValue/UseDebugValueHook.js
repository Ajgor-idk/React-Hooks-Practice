import React, { useState } from "react";
import { useLocalStorage } from "./UseLocalStorageHook";

export function UseDebugValueHook() {
  // It should just update our value inside the inputs. When we gave it computed many times it should lag unless we use useDebugValue hook in our custom hook (useLocalStorage)

  const [firstName, setFirstName] = useLocalStorage("firstName", "Adam");
  const [lastName, setLastName] = useState("Cook");

  return (
    <>
      First:{" "}
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      Last:{" "}
      <input
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
    </>
  );
}
