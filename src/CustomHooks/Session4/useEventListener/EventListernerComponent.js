import React, { useState } from "react";
import { useEventListener } from "./useEventListener";

export function EventListernerComponent() {
  const [key, setKey] = useState("");

  useEventListener("keydown", (event) => {
    setKey(event.key);
  });

  return <div>Last Key: {key}</div>;
}
