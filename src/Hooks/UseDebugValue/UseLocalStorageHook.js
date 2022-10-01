import { useCallback, useDebugValue, useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    //Some code
  });

  //Just to make a caution alert go away
  const localStorage = null

  //It's gonna be in an array and we can make/pass objects here too
  useDebugValue(value, key);

  //It's gonna compute a long time and lag our site
  useDebugValue(slowFunction(value));

  //It's gonna compute the slow function when we open devtools and we'd want to chekc it
  useDebugValue(value, (value) => slowFunction(value));

  useEffect(() => {
    // Some code
  }, [key, value, localStorage]);

  const remove = useCallback(() => {
    //Some code
  }, []);

  return [value, setValue, remove];
}

function slowFunction(value) {
  for (let index = 0; index < 300000000; index++) {}
  return value;
}
