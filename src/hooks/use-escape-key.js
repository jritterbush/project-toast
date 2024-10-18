import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        callback(event);
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
}
