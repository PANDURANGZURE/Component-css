import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  to,
  bg,
  color,
  style,
  ...props
}) => {
  const isLink = Boolean(to);

  const customStyles = {
    ...style,
    backgroundColor: bg,
    color: color,
  };

  const combinedClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  // If it's a link → React Router Link, else → button
  if (isLink) {
    return (
      <Link
        to={to}
        className={combinedClasses}
        style={customStyles}
        {...props}
      >
        {loading ? "Loading..." : children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      style={customStyles}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

