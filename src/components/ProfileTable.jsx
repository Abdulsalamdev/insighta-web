export default function ProfileTable({ profiles }) {
  if (!profiles || profiles.length === 0) {
    return (
      <div style={styles.empty}>
        <p>No profiles found</p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Gender</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Country</th>
          </tr>
        </thead>

        <tbody>
          {profiles.map((p, index) => (
            <tr
              key={p.id}
              style={{
                ...styles.tr,
                backgroundColor:
                  index % 2 === 0 ? "#020617" : "#0f172a",
              }}
            >
              <td style={styles.td}>{p.name}</td>
              <td style={styles.td}>
                <span style={badge(p.gender)}>
                  {p.gender || "N/A"}
                </span>
              </td>
              <td style={styles.td}>{p.age}</td>
              <td style={styles.td}>{p.country_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* 🔥 Badge styling for gender */
const badge = (gender) => ({
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  background:
    gender === "male"
      ? "#1d4ed8"
      : gender === "female"
      ? "#be185d"
      : "#334155",
  color: "white",
});

/* 🔥 Styles */
const styles = {
  wrapper: {
    overflowX: "auto",
    borderRadius: "12px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },

  thead: {
    background: "#020617",
  },

  th: {
    textAlign: "left",
    padding: "14px",
    color: "#94a3b8",
    fontWeight: "600",
    borderBottom: "1px solid #334155",
  },

  tr: {
    transition: "all 0.2s ease",
    cursor: "pointer",
  },

  td: {
    padding: "14px",
    borderBottom: "1px solid #1e293b",
  },

  empty: {
    padding: "40px",
    textAlign: "center",
    color: "#94a3b8",
    background: "#1e293b",
    borderRadius: "12px",
  },
};