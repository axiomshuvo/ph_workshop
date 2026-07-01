import { Suspense } from "react";
import { UsersTable } from "../components/UsersTable";
import { deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

export default async function User() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>Users : {users.length}</h1>
      <ul>
        <Suspense fallback={<div>Loading...</div>}>
          <UsersTable users={users} deleteUserAction={deleteUser} />
        </Suspense>
      </ul>
    </div>
  );
}
