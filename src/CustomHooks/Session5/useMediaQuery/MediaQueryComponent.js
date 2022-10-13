import React from "react";
import { useMediaQuery } from "./useMediaQuery";

export function MediaQueryComponent() {
  const isLarge = useMediaQuery("(min-width: 200px)");

  return <div>Large: {isLarge.toString()}</div>;
}
