import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";
import TaskCard from "./TaskCard";

export default async function Tasks() {
  const tasks = await getTasks();
  return (
    <div className="container mx-auto  p-4">
      <h1>Task List</h1>
      <p>{tasks.length} tasks available</p>
      <p>
        <Link href="/tasks/new" className="text-blue-500 hover:underline">
          <Button variant="secondary">Add New Task</Button>
        </Link>
      </p>
      <p>{/* <AddNewTask AddATask={AddATask} /> */}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
