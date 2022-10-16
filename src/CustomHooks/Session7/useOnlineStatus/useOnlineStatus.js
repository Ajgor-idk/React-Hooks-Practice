import { useState } from "react";
import { useEventListener } from "../../Session4/useEventListener/useEventListener";

export function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));

  return online;
}