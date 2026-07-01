import { revalidatePath } from "next/cache";

export const deleteUser = async (userId) => {
  "use server";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
    {
      method: "DELETE",
    },
  );

  const data = await res.json();
  console.log(data);
  // revalidate cache for the users page
  if (data.deletedCount > 0) {
    console.log("User deleted successfully");
    revalidatePath("/users");
  } else {
    console.error("Failed to delete user");
  }
  return data;
};
