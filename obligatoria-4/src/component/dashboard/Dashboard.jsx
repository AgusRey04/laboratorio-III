//import PropTypes from 'prop-types'
import TaskList from "../taskList/TaskList";

import { useState } from "react";
import TaskNew from "../taskNew/TaskNew";


const TASKS = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripcion de la tarea 1 ",
    status: true
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripcion de la tarea 2",
    status: true
  },
];
const Dashboard = () => {
    const [tasks, setTasks] = useState(TASKS)

    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData ={
            ...enteredTaskData,
            id: Math.random()
        };
        console.log(taskData);
        setTasks((prev) => [...prev,taskData])
    }
    // const deleteTaskHandler = () => {
    //     setTasks((prev) => prev.filter((task) => task.id!== 1))
    // };

  return (
    <>
    <h1>TAREAS</h1>
    {/* <Button onClick={handleClick}>Agregar Tarea</Button> */}
    <TaskNew onTaskDataSave={saveTaskDataHandler}/>
    <TaskList tasks={tasks}  />
</>
  )
}



export default Dashboard
