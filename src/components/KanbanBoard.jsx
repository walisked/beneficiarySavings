import { useState } from "react";

const tasksData = {
  "To Do": ["Task 1", "Task 2"],
  "In Progress": ["Task 3"],
  "Completed": ["Task 4"],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Object.keys(tasks).map((status) => (
        <div key={status} className="p-4 bg-gray-100 rounded-md shadow-md">
          <h3 className="font-semibold mb-2">{status}</h3>
          {tasks[status].map((task, index) => (
            <div key={index} className="p-2 bg-white shadow-sm rounded-md mb-2">
              {task}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
