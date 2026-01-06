import React from "react";
import styles from "./Badge.module.css";

export default function BadgeDot({ color = "Red", size = 8 }) {
  const colorClass = styles[`dot${color.charAt(0).toUpperCase() + color.slice(1)}`] || "";
  return (
    <span
      className={`${styles.dot} ${colorClass}`}
      style={{ width: size, height: size }}
    />
  );
}
