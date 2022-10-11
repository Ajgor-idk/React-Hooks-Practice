import React from "react";
import { useWindowSize } from "./useWindowSize";

export function WindowSizeComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width} x {height}
    </div>
  );
}
