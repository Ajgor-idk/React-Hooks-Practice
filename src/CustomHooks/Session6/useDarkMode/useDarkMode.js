import { useEffect } from "react";
import { useLocalStorage } from "../../Session1/useLocalStorage";
import { useMediaQuery } from "../../Session5/useMediaQuery/useMediaQuery";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
