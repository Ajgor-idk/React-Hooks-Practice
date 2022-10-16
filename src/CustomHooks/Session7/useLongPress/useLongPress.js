import { useEventListener } from "../../Session4/useEventListener/useEventListener";
import { useTimeout } from "../../Session2/useTimeout/useTimeout";
import { useEffectOnce } from "../../Session5/useEffectOnce/useEffectOnce";

export function useLongPress(ref, callback, { delay = 250 } = {}) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffectOnce(clear);

  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);
  
  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
}
