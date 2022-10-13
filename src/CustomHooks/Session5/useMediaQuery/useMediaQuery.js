import React, { useEffect, useState } from "react";
import { useEventListener } from "../../Session4/useEventListener/useEventListener";

export function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    "change",
    (event) => setIsMatch(event.matches),
    mediaQueryList
  );

  return isMatch;
}
