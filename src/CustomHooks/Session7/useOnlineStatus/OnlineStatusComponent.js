import React from "react";
import { useOnlineStatus } from "./useOnlineStatus";

export function OnlineStatusComponent() {
  const online = useOnlineStatus();

  return <div>{online.toString()}</div>;
}
