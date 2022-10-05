import React, { useState } from "react";
import { useTimeout } from "./useTimeout";

export function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}
