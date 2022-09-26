import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

export function UseContextHook() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
