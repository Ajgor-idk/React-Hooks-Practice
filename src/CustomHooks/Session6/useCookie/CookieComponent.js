import React from "react";
import { useCookie } from "./useCookie";

export function CookieComponent() {
  const [value, update, remove] = useCookie("name", "John");

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("Sally")}>Change Name To Sally</button>
      <button onClick={remove}>Delete Name</button>
    </>
  );
}
