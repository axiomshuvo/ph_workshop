export default async function UserPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_API}/users`);
  const users = await res.json();

  return (
    <div className="container mx-auto ">
      <h2>UserPage</h2>
      <ul>
        {users.map((user) => (
          <li className="border-b border-gray-200 py-2" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
