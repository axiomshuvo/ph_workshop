import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/tasks";
import { AddNewTask } from "./AddNewTask";

export default async function Tasks() {
  const tasks = await getTasks();
  return (
    <div className="container mx-auto  p-4">
      <h1>Task List</h1>
      <p>{tasks.length} tasks available</p>
      <p>
        <AddNewTask />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
