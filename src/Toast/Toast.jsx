import { useEffect, useState } from "react";

let showToast;

export function toast(message) {
  if (showToast) showToast(message);
}

export function Toast() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    showToast = (message) => {
      setMsg(message);

      // Auto hide after 10 seconds
      setTimeout(() => {
        setMsg("");
      }, 10000);
    };
  }, []);

  if (!msg) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: "black",
        color: "white",
        padding: "10px 12px",
        borderRadius: "6px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        maxWidth: "300px",
        whiteSpace: "nowrap",
      }}
    >
      {/* Message */}
      <span style={{ flex: 1 }}>{msg}</span>

      {/* Close button at end */}
      <button
        onClick={() => setMsg("")}
        style={{
          background: "black",
          border: "none",
          color: "white",
          fontSize: "14px",
          cursor: "pointer",
          padding: 0,
          marginLeft: "4px",
        }}
        aria-label="Close toast"
      >
        ✕
      </button>
    </div>
  );
}
