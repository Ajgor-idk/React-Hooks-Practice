import React from "react";
import { UseStateHook } from "./Hooks/UseState/UseStateHook.js";
import { UseEffectHook } from "./Hooks/UseEffect/UseEffectHook.js";
import { UseContextHook } from "./Hooks/UseContext/UseContextHook.js";
import { UseRefHook } from "./Hooks/UseRef/UseRefHook.js";
import { UseMemoHook } from "./Hooks/UseMemo/UseMemoHook.js";
import { UseCallbackHook } from "./Hooks/UseCallback/UseCallbackHook.js";
import { UseReducerHook } from "./Hooks/UseReducer/UseReducerHook.js";
import { UseTransitionHook } from "./Hooks/UseTransition/UseTransitionHook.js";
import { UseDeferredValueHook } from "./Hooks/UseDeferredValue/UseDeferredValueHook.js";

function App() {
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseTransitionHook /> */}
      <UseDeferredValueHook />
    </>
  );
}

export default App;
