export default function ProfileTable({ profiles }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.gender}</td>
            <td>{p.age}</td>
            <td>{p.country_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}