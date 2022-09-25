import React, { useState } from "react";

// function setStateInitial() {
//   console.log("State setted");
//   return 4
// }

export function UseStateHook() {
  //* The first example I was talking in the note
  /*
  Here the state will be called once because we setted a fn that will start the setStateInitial fn and run it just once.
  const [count, SetCount] = useState(() => setStateInitial())

  Same here
  const [count, SetCount] = useState(() => {
    console.log("State setted");
    return 4
  })

  Here the fn will run every time because every time the page renders the initial state is setted by running the fn itself.
  const [count, SetCount] = useState(setStateInitial())
  
  */
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
