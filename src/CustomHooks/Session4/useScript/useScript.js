import { useAsync } from "../../Session3/useAsync/useAsync";

export function useScript(url) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}
