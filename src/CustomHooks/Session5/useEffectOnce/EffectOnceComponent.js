import React, { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

export function EffectOnceComponent() {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert("Hi"));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </>
  );
}
