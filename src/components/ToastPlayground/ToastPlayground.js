import React from "react";
import Button from "../Button";
import { variantOptions } from "../Toast";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider";

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(variantOptions[0]);
  const { addToast } = React.useContext(ToastContext);
  const messageRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message || !variant) {
      // handle errors for no content
      return;
    }

    addToast(message, variant);

    setMessage("");
    setVariant(variantOptions[0]);
    messageRef.current.focus();
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
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
              ref={messageRef}
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
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
                  onChange={(event) => setVariant(event.target.value)}
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
      </form>
    </div>
  );
}

export default ToastPlayground;
