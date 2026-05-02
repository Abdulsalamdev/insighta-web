import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me");
        navigate("/dashboard");
      } catch (err) {}
    };

    checkAuth();
  }, [navigate]);

  // GitHub login (analyst)
  const handleGithubLogin = () => {
    window.location.href = `${API_URL}/auth/github`;
  };

  // Admin login
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/login", {
        email,
        role,
      });

      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Insighta</h1>

        {/* Admin Login */}
        <form onSubmit={handleAdminLogin} style={styles.form}>
          <h3>Admin Login</h3>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="admin">Admin</option>
            <option value="analyst">Analyst</option>
          </select>

          <button style={styles.primaryBtn} disabled={loading}>
            {loading ? "Logging in..." : "Login as Admin"}
          </button>
        </form>

        <hr style={{ margin: "20px 0" }} />

        {/* GitHub Login */}
        <button onClick={handleGithubLogin} style={styles.secondaryBtn}>
          Login with GitHub (Analyst)
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #0f172a, #020617)",
  },
  card: {
    padding: "30px",
    background: "#1e293b",
    borderRadius: "16px",
    width: "340px",
    color: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white",
  },
  primaryBtn: {
    padding: "12px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  secondaryBtn: {
    padding: "12px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
  },
};