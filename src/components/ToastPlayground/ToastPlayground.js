import React from "react";
import Button from "../Button";
import { variantOptions } from "../Toast";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider";

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(variantOptions[0]);
  const { toasts, addToast, removeToast, removeAllToasts } =
    React.useContext(ToastContext);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        removeAllToasts();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [removeAllToasts]);

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleChangeVariant = (event) => {
    setVariant(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message || !variant) {
      // handle errors for no content
      return;
    }

    addToast(message, variant);

    setMessage("");
    setVariant(variantOptions[0]);
  };

  const handleClose = (id) => {
    removeToast(id);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && (
        <ToastShelf toasts={toasts} onClose={handleClose} />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleChangeMessage}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {variantOptions.map((variantOption) => (
              <label htmlFor={`variant-${variantOption}`} key={variantOption}>
                <input
                  id={`variant-${variantOption}`}
                  type="radio"
                  name="variant"
                  value={variantOption}
                  onChange={handleChangeVariant}
                  checked={variant === variantOption}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
