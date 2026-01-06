import { createPortal } from "react-dom";
import { useEffect } from "react";
import styles from "./modal.module.css";

export const Modal = ({
  open,
  onClose,
  children,
  variant = "center",
  animation = "scale",
}) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${styles[variant]} ${styles[animation]}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

/* Sub components */
Modal.Header = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

Modal.Body = ({ children }) => (
  <div className={styles.body}>{children}</div>
);

Modal.Footer = ({ children }) => (
  <div className={styles.footer}>{children}</div>
);
