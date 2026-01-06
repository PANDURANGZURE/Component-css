import React from "react";
import styles from "./Badge.module.css";

export default function Badge({ children, color = "gray", className = "" }) {
  const colorClass = styles[color] || "";
  return <span className={`${styles.badge} ${colorClass} ${className}`}>{children}</span>;
}
