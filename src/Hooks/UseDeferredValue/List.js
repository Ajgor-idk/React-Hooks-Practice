import { useMemo, useDeferredValue } from "react";

export function List({ input }) {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const list = [];
    for (let index = 0; index < LIST_SIZE; index++) {
      list.push(<div key={index}>{deferredInput}</div>);
    }
    return list;
  }, [deferredInput]);

  return list;
}
