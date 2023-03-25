// pages/index.tsx
import { useState, useEffect } from "react";
import { Task } from "../data/Task";
import TaskList from "../components/TaskList";
import { readTasksFromCSV, writeTasksToCSV } from "../utils/csvManager";
import { updateTask } from "../utils/taskUtils";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadedTasks = readTasksFromCSV();
    setTasks(loadedTasks);
  }, []);

  const updateTasks = (updatedTask: Task) => {
    const newTasks = updateTask(tasks, updatedTask);
    setTasks(newTasks);
    writeTasksToCSV(newTasks);
  };

  return <TaskList tasks={tasks} onUpdateTask={updateTasks} />;
}

