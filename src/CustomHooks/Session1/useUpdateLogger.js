import React, { useEffect } from "react";

export function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
