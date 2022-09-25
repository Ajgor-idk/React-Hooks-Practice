import React from "react";
import { UseStateHook } from "./Hooks/UseState/UseStateHook.js";
import { UseEffectHook } from "./Hooks/UseEffect/UseEffectHook.js";

function App() {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
    </>
  );
}

export default App;
