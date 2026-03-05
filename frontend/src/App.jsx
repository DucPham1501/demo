import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function callHello() {
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("/hello");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMessage(data.message);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Demo App</h1>
      <button style={styles.button} onClick={callHello} disabled={loading}>
        {loading ? "Loading..." : "Say Hello"}
      </button>
      {message && <p style={styles.message}>{message}</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  button: {
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  message: {
    marginTop: "1.5rem",
    fontSize: "1.25rem",
    color: "#16a34a",
  },
  error: {
    marginTop: "1.5rem",
    fontSize: "1rem",
    color: "#dc2626",
  },
};
