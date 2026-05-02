import { logoutUser } from "../api/auth.api";

export default function Navbar() {
  const handleLogout = async () => {
    await logoutUser();
    window.location.replace("/");
  };

  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>Insighta</h2>

      <button style={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#020617",
    borderBottom: "1px solid #1e293b",
  },
  logo: {
    color: "#38bdf8",
  },
  logoutBtn: {
    background: "#ef4444",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
};