import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileTable from "../components/ProfileTable";
import {
  getProfiles,
  createProfile,
  exportProfilesCSV,
} from "../api/profile.api";

export default function Dashboard() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    const data = await getProfiles();
    setProfiles(data);
  };

  const handleCreate = async () => {
    await createProfile({ name: "John Doe" });
    loadProfiles();
  };

  const handleExport = async () => {
    const data = await exportProfilesCSV();

    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    link.download = "profiles.csv";
    link.click();
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>

          <div style={styles.actions}>
            <button style={styles.primaryBtn} onClick={handleCreate}>
              + Create Profile
            </button>

            <button style={styles.secondaryBtn} onClick={handleExport}>
              Export CSV
            </button>
          </div>
        </div>

        <div style={styles.card}>
          <ProfileTable profiles={profiles} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
  },
  content: {
    padding: "30px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  primaryBtn: {
    background: "#22c55e",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
  secondaryBtn: {
    background: "#3b82f6",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
  },
};