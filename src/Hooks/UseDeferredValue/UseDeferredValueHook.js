import React, { useState } from "react";
import { List } from "./List";

export function UseDeferredValueHook() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
}
