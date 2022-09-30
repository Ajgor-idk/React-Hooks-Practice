import React, { useState, useTransition } from "react";

export function UseTransitionHook() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(event) {
    setInput(event.target.value);
    startTransition(() => {
      const list = [];
      for (let index = 0; index < LIST_SIZE; index++) {
        list.push(event.target.value);
      }
      setList(list);
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? "Loading..." : list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}
