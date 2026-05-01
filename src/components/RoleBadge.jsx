// RoleBadge.jsx
export default function RoleBadge({ role }) {
  return (
    <span>
      {role === "admin" ? "🛡️ Admin" : "📊 Analyst"}
    </span>
  );
}