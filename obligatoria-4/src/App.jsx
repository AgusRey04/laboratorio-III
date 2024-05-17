import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import TASKS from "./component/list/List";
import { useState } from "react";
import TaskNew from "./component/taskNew/TaskNew";
import TaskDetails from "./component/taskDetails/TaskDetails";
import TaskList from "./component/taskList/TaskList";
function App() {
  const [tasks, setTasks] = useState(TASKS)

    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData ={
            ...enteredTaskData,
            id: Math.random()
        };
        console.log(taskData);
        setTasks((prev) => [...prev,taskData])
    }

    const handlerStatusChange =() => {
      
    }  
  const router = createBrowserRouter([  
    {
      path: "/",
      element: (
        <TaskList tasks={tasks} />
      ),
    },
    {
      path: "taskList/:id",
      element:  <TaskDetails/>  
    
    },
    {
      path: "/newTask",
      element: <TaskNew onTaskDataSave = {saveTaskDataHandler} onStatus={handlerStatusChange}/>
    }
    ,
    {
      path: "*",
      element: <p>⚠️⚠️⚠️</p> 
    }

  ]);
  return (
    <>
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
