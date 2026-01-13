import React from "react";
import { Link } from "react-router-dom"; // Change this to 'next/link' if using Next.js
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
  
  // Logic to determine which HTML tag to render
  const Tag = isLink ? Link : "button";

  const customStyles = {
    ...style,
    backgroundColor: bg,
    color: color,
  };

  const combinedClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].join(" ");

  return (
    <Tag
      to={isLink ? to : undefined} // React Router uses 'to'
      className={combinedClasses}
      disabled={!isLink && (disabled || loading)}
      aria-disabled={disabled || loading}
      style={customStyles}
      {...props}
    >
      {loading ? "Loading..." : children}
    </Tag>
  );
};