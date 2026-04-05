import { useLoaderData } from "react-router";

export default function Customers() {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h1>Customers List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
