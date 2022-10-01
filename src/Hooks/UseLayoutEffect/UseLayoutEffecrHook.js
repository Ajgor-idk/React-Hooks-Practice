import React, { useLayoutEffect, useState } from "react";

export function UseLayoutEffecrHook() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <div>{count}</div>
    </>
  );
}
