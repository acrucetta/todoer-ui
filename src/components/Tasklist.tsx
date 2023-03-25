import { Task } from "../data/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (updatedTask: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask }) => (
  <div>
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} onUpdateTask={onUpdateTask} />
    ))}
  </div>
);

export default TaskList;

