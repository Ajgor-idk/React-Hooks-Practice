import React from "react";
import { useStateValidation } from "./useStateValidation";

export function StateValidationComponent() {
  const [username, setUsername, isValid] = useStateValidation(
    (name) => name.length > 5,
    ""
  );
  return (
    <>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </>
  );
}
