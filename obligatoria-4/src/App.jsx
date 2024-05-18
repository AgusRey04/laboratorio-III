import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import TASKS from "./component/list/List";
import { useState } from "react";
import TaskNew from "./component/taskNew/TaskNew";
import TaskDetails from "./component/taskDetails/TaskDetails";
import TaskList from "./component/taskList/TaskList";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handlerSaveTaskData = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random(),
    };
    setTasks((prev) => [...prev, taskData]);
  };

  const handlerSearchID = (buscarID) => {
    setTasks((prev) => prev.filter((task) => task.id !== buscarID));
  };

  const handlerTaskStatus = (taskId) => {
    setTasks((prev) =>prev.map((task) =>task.id === taskId ? { ...task, status: !task.status } : task));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <TaskList
          tasks={tasks}
          onID={handlerSearchID}
          onStatusChange={handlerTaskStatus}
        />
      ),
    },
    {
      path: "taskList/:id",
      element: <TaskDetails  />,
    },
    {
      path: "/newTask",
      element: <TaskNew onTaskDataSave={handlerSaveTaskData} />,
    },
    {
      path: "*",
      element: <p>⚠️⚠️⚠️</p>,
    },
  ]);

  return (
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;