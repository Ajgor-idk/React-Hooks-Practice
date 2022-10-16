import React from "react";
import { useRenderCount } from "./useRenderCount";
import { useToggle } from "../../Session2/useToggle/useToggle";

export function RenderCountComponent() {
  const [boolean, toggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}
