import styles from "./checkbox.module.css";

export const Checkbox = ({
  checked = false,
  onChange,
  label,
  variant = "default",
  size = "md",
  color = "#000",
  disabled = false,
  error = false,
  className = "",
  ...props
}) => {
  return (
    <label
      className={`${styles.wrapper} ${className}`}
      style={{ "--zure-color": error ? "red" : color }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />

      <span
        className={`${styles.checkbox} ${styles[variant]} ${styles[size]}`}
      />

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
