import { getUserById } from "@/app/lib/data";

export default async function SingleUserDetails({ params }) {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log(user);
  return (
    <div>
      <h1>Single User Details</h1>
      <p>Name: {user?.username ?? user?.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
