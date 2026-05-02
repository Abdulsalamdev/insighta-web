import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../api/axios";




const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me");
        navigate("/dashboard");
      } catch (err) {
        // not logged in → stay on login
      }
    };
    checkAuth();
  }, [navigate]);


  const handleLogin = () => {
   window.location.href = `${API_URL}/auth/github`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Insighta</h1>
      <button onClick={handleLogin}>
        Login with GitHub
      </button>
    </div>
  );
}