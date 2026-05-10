import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { postTask } from "./tasks";

export default async function AddATask(formData) {
  "use server";
  //   const title = formData.get("title");
  //   const description = formData.get("description");
  //   const status = formData.get("status");
  //   const priority = formData.get("priority");
  //   const date = formData.get("date");
  //   const tags = formData.getAll("tags");
  //   const newTask = {
  //     title,
  //     description,
  //     status,
  //     priority,
  //     date,
  //     tags,
  //   };

  //   single value     → formData.get("name")
  // multiple values  → formData.getAll("name")
  // full object      → Object.fromEntries(formData)
  // loop             → formData.entries() / formData.forEach()
  // check exists     → formData.has("name")

  const newTask = Object.fromEntries(formData.entries());

  console.log("Adding new task:", newTask);
  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks"); // Revalidate the tasks page to show the new task
  }

  console.log(res);
  return res;
}

export async function addNewPageTask(formdata) {
  "use server";
  const newTask = Object.fromEntries(formdata.entries());
  console.log("Adding new task from page:", newTask);
  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks"); // Revalidate the tasks page to show the new task
    redirect("/tasks"); // Redirect to the tasks page after adding the new task
  }
  console.log(res);
  alert("added new task");
  return res;
}
