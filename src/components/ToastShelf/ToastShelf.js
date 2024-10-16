import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts = [], onClose }) {
  if (!toasts.length) {
    return;
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, type }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast type="notice" onClose={() => onClose(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
