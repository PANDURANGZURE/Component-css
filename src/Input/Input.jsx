import styles from "./input.module.css";

export const Input = ({
  value,
  onChange,
  placeholder = "Enter text",
  type = "text",
  size = "md",          // sm | md | lg
  variant = "default",  // default | outline | ghost
  disabled = false,
  error = false,
  className = "",
  label,
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`${styles.input} ${styles[size]} ${styles[variant]} ${
          error ? styles.error : ""
        }`}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={error}
        {...props}
      />
      {label && <label className={styles.label}>{label}</label>}
      {error && <span className={styles.errorText}>Invalid input</span>}
    </div>
  );
};
