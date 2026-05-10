import tasks from "@/data/tasks.json";

export const getTasks = async () => {
  return tasks;
};

export const postTask = async (newTask) => {
  newTask.id = tasks.length + 1; // Simple ID generation
  // tasks.push(newTask);
  tasks.unshift(newTask); // Add new task to the beginning of the list
  return { ok: true, message: "Task added successfully", task: newTask };
};
