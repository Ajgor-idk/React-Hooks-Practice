import React from "react";
import { UseStateHook } from "./Hooks/UseState/UseStateHook.js";
import { UseEffectHook } from "./Hooks/UseEffect/UseEffectHook.js";
import { UseContextHook } from "./Hooks/UseContext/UseContextHook.js";
import UseRefHook from "./Hooks/UseRef/UseRefHook.js";

function App() {
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseContextHook /> */}
      <UseRefHook />
    </>
  );
}

export default App;
