export const getUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    //     cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const getUserById = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
    {
      //     cache: "no-store",
    },
  );
  const data = await res.json();
  console.log(data);
  return data;
};
