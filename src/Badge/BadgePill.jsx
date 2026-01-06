import React from "react";
import styles from "./Badge.module.css";

export default function BadgePill({ children, color = "Gray" }) {
  const colorClass = styles[`pill${color.charAt(0).toUpperCase() + color.slice(1)}`] || "";
  return <span className={`${styles.pill} ${colorClass}`}>{children}</span>;
}
