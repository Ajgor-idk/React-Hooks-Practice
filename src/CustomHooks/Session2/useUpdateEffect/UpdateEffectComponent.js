import React, { useState } from "react";
import { useUpdateEffect } from "./useUpdateEffect";

export function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}
