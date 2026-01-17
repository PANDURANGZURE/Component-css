import { useState } from "react";
import styles from "./navbar.module.css";

export const Navbar = ({
  brand = "Brand",
  links = [],
  sticky = false,
  variant = "solid",
  textColor = "#000",
  bgColor = "#ffffff",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${styles.navbar} ${styles[variant]} ${sticky ? styles.sticky : ""}`}
      style={{ 
        "--zure-text-color": textColor,
        "--zure-bg-color": bgColor 
      }}
    >
      <div className={styles.brand}>{brand}</div>

      {/* Desktop Links */}
      <div className={styles.links}>
        {links.map((link, i) => (
          <a key={i} href={link.href}>{link.label}</a>
        ))}
      </div>

      {/* Toggle Button */}
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu - Controlled by 'active' class */}
      <div className={`${styles.mobileMenu} ${open ? styles.active : ""}`}>
        {links.map((link, i) => (
          <a key={i} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};