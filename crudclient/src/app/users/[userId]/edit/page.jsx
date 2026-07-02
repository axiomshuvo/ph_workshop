import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

export default async function UserUpdate({ params }) {
  const { userId } = await params;

  const user = await getUserById(userId);
  console.log(user);

  const updateUserWrapper = async (formData) => {
    "use server";
    return updateUser(userId, formData);
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-center text-2xl font-bold">Update User</h1>
      <div className="mx-auto w-1/3">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            name="name"
            type="text"
            variant="secondary"
            defaultValue={user?.name}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            type="email"
            variant="secondary"
            defaultValue={user?.email}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            type="text"
            variant="secondary"
            defaultValue={user?.role}
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>

          <div className="flex justify-between">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
