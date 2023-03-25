// utils/taskUtils.ts
import { Task } from "../data/Task";

export function updateTask(tasks: Task[], updatedTask: Task): Task[] {
  return tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
}

