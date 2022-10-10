import React from "react";
import { useAsync } from "./useAsync";

export function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const succes = true;
      setTimeout(() => {
        succes ? resolve("Hi") : reject("Error");
      }, 1000);
    });
  });
  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  );
}
