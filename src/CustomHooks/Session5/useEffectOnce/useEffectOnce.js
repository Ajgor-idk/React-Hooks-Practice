import React, { useEffect, useRef } from "react";

export function useEffectOnce(callback) {
  const firstCall = useRef(true);

  useEffect(() => {
    if (firstCall.current) {
      firstCall.current = false;
      callback();
    }
  }, []);
}
