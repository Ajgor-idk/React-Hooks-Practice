import { useState } from "react";
import { useEventListener } from "../../Session4/useEventListener/useEventListener";

export function useHover(ref) {
  const [hovered, setHovered] = useState(false);

  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);

  return hovered;
}
