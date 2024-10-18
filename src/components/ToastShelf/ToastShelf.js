import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  if (!toasts.length) {
    return;
  }

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notifications"
      className={styles.wrapper}
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onClose={() => removeToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
