import { use } from "react";

export default function UserList({ userPromise }) {
  console.log(userPromise);
  const users2 = use(userPromise);
  console.log(users2);
  return (
    <div>
      <h1>UserList 2</h1>
      <ul>
        {users2.map((user) => (
          <li className="border-b border-gray-200 py-2" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
