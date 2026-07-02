import { Suspense } from "react";
import AddUserModal from "../components/AddUserModal";
import { UsersTable } from "../components/UsersTable";
import { createUser, deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

export default async function User() {
  const users = await getUsers();
  //console.log(users);
  return (
    <div className="container mx-auto p-4 text-center">
      <h1>Users : {users.length}</h1>
      <AddUserModal createUserAction={createUser} />
      <ul>
        <Suspense fallback={<div>Loading...</div>}>
          <UsersTable users={users} deleteUserAction={deleteUser} />
        </Suspense>
      </ul>
    </div>
  );
}
