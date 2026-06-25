// const userPromise = fetch(process.env.DATA_API).then((res) => res.json());

import UserList from "@/components/UserList";
import { Suspense } from "react";

const getUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_API}/users`);
  return res.json();
};

export default function User2page() {
  const userPromise = getUsers();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <UserList userPromise={userPromise} />
      </Suspense>
    </div>
  );
}
