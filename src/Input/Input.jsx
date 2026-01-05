import styles from "./input.module.css";

export const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  size = "md",          // sm | md | lg
  variant = "default",  // default | outline | ghost
  disabled = false,
  error = false,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        ${styles.input} 
        ${styles[size]} 
        ${styles[variant]} 
        ${error ? styles.error : ""} 
        ${className}
      `}
      disabled={disabled}
      aria-disabled={disabled}
      aria-invalid={error}
      {...props}
    />
  );
};
