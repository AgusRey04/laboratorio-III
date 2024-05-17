// import React from 'react'
import PropTypes from 'prop-types'
import Task from '../task/Task'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const TaskList = ({tasks,onStatus}) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>GESTION DE TAREAS</h1>
      <Button onClick={()=>( navigate("/newTask"))}> Agregar Tarae</Button>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status= {task.status}
            onStatus = {onStatus}
           />
        ))
      }
    
    </>
  )
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    onStatus: PropTypes.func.isRequired,
  
}

export default TaskList