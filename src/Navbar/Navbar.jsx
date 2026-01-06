import { useState } from "react";
import styles from "./navbar.module.css";

export const Navbar = ({
  brand = "Brand",
  links = [],
  sticky = false,
  variant = "solid",
  textColor = "#000",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${styles.navbar} ${styles[variant]} ${
        sticky ? styles.sticky : ""
      }`}
      style={{ "--zure-text-color": textColor }}
    >
      {/* Brand */}
      <div className={styles.brand}>{brand}</div>

      {/* Desktop Links */}
      <div className={styles.links}>
        {links.map((link, i) => (
          <a key={i} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((link, i) => (
            <a key={i} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
