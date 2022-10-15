import { useEventListener } from "../../Session4/useEventListener/useEventListener";

export function useClickOutside(ref, callback) {
  useEventListener(
    "click",
    (event) => {
      if (ref.current == null || ref.current.contaions(event.target)) return;
      callback(event);
    },
    document
  );
}
