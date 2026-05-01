export default function Login() {
  const handleLogin = () => {
    window.location.href = "https://profilegen-api-production.up.railway.app/api/v1/auth/github";
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