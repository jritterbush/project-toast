import React from "react";

export function useKeydown(key, callback) {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === key) {
        callback(event);
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [key, callback]);
}
