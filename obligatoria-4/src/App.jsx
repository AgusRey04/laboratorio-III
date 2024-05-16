import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'

import Dashboard from "./component/dashboard/Dashboard";

import TaskDetails from "./component/taskDetails/TaskDetails";
function App() {

  const router = createBrowserRouter([  
    {
      path: "/",
      element: (
        <Dashboard />
      ),
    },
    {
      path: "taskList/:id",
      element:  <TaskDetails/>  
    
    },

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
