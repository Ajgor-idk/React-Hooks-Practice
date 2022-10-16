import { useEffect, useRef } from "react";

export function useRenderCount() {
  const isFirstUpdate = useRef(true);
  const count = useRef(1);

  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
    } else {
      count.current++;
    }
  });

  return count.current;
}
