import React, { useEffect, useRef, useState } from "react";
import { useDeepCompareEffect } from "./useDeepCompareEffect";

export function DeepCompareEffectComponent() {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectCountRef = useRef();
  const useDeepCompareEffectRef = useState();

  const person = { age: age, name: "Igor" };

  useEffect(() => {
    useEffectCountRef.current.textContent =
      parseInt(useEffectCountRef.current.textContent) + 1;
  }, [person]);

  useDeepCompareEffect(() => {
    useDeepCompareEffectRef.current.textContent =
      parseInt(useDeepCompareEffectRef.current.textContent) + 1;
  }, [person]);

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>
        Incremate Age
      </button>
      <button onClick={() => setOtherCount((count) => count + 1)}>
        Incremate Other Count
      </button>
    </div>
  );
}
