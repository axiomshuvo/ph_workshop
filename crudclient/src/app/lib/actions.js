import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const createUser = async (userData) => {
  "use server";

  const newUser = Object.fromEntries(userData.entries());
  console.log(newUser);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await res.json();
  console.log("data after post", data);

  // revalidate cache for the users page
  if (data.insertedId) {
    console.log("User created successfully");
    revalidatePath("/users");
  } else {
    console.error("Failed to create user");
  }
  return data;
};

// Update user function

export const updateUser = async (userId, userData) => {
  "use server";
  const updatedUser = Object.fromEntries(userData.entries());
  console.log(updatedUser);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    },
  );

  const data = await res.json();
  console.log("After update", data);

  // revalidate cache for the users page
  if (data.modifiedCount > 0) {
    console.log("User updated successfully");
    revalidatePath("/users");
    redirect("/users");
  } else {
    console.error("Failed to update user");
  }
  return data;
};
