import React from "react";

export function useEscapeKey(callback) {
  const handleEscape = React.useCallback(
    (e) => {
      if (e.key === "Escape") {
        callback();
      }
    },
    [callback]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);
}
