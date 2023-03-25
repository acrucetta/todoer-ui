import { Task, Status } from "../data/Task";

interface TaskItemProps {
  task: Task;
  onUpdateTask: (updatedTask: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdateTask }) => {
  const toggleStatus = () => {
    const updatedTask = new Task(
      task.id,
      task.description,
      task.tags,
      task.due,
      task.timestamp,
      task.priority,
      task.status === Status.Pending ? Status.Completed : Status.Pending
    );
    onUpdateTask(updatedTask);
  };

  return (
    <div className="bg-gray-100 p-4 mb-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{task.description}</h2>
      <ul className="flex mb-2">
        {task.tags.map((tag, idx) => (
          <li key={idx} className="mr-2 text-sm bg-gray-200 px-2 py-1 rounded">
            {tag}
          </li>
        ))}
      </ul>
      <p className="text-sm mb-1">Due: {task.due}</p>
      <p className="text-sm mb-1">Timestamp: {task.timestamp}</p>
      <p className="text-sm mb-1">Priority: {task.priority}</p>
      <p className="text-sm mb-1">
        Status:{" "}
        <span className="cursor-pointer underline" onClick={toggleStatus}>
          {task.status}
        </span>
      </p>
    </div>
  );
};

export default TaskItem;

