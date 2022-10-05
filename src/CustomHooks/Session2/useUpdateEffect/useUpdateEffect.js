import { useEffect, useRef } from "react";

export function useUpdateEffect(callback, dependencies) {
  const secondRenderRef = useRef(false);

  useEffect(() => {
    if (secondRenderRef.current) {
      return callback();
    }
    secondRenderRef.current = true;
  }, dependencies);

  useEffect(() => {
    return () => {
      secondRenderRef.current = false;
    };
  }, []);
}
