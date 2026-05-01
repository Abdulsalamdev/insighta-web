import { logoutUser } from "../api/auth.api";

export default function Navbar() {
  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/";
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Insighta Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}