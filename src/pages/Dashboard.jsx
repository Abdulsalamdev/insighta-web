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
    await createProfile({
      name: "John Doe",
    });
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
    <div>
      <Navbar />

      <h1>Dashboard</h1>

      <button onClick={handleCreate}>Create Profile</button>
      <button onClick={handleExport}>Export CSV</button>

      <ProfileTable profiles={profiles} />
    </div>
  );
}