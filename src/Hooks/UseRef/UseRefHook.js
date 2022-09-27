import React, { useEffect, useRef, useState } from "react";

export function UseRefHook() {
  const [name, setName] = useState("");
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}
