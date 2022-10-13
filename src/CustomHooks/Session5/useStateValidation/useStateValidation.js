import React, { useCallback, useState } from "react";

export function useStateValidation(validationFn, initialValue) {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFn(state));

  const onChange = useCallback(
    (nextState) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFn(value));
    },
    [validationFn]
  );

  return [state, onChange, isValid];
}
