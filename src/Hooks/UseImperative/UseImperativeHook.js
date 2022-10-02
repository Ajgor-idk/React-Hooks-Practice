import React, { useRef, useState } from "react";
import CustomInput from "./CustomInput";

export function UseImperativeHook() {
  const [value, setValue] = useState("red");
  const inputRef = useRef();
  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </>
  );
}
