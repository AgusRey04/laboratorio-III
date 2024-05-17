// import React from 'react'
import PropTypes from 'prop-types'
import Task from '../task/Task'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const TaskList = ({tasks,onStatus,onID}) => {
  const navigate = useNavigate();


  return (
    <>
      <h1>GESTION DE TAREAS</h1>
      <Button onClick={()=>( navigate("/newTask"))}> Agregar Tarae</Button>
      {
        tasks.map((task) => (
          <div key={task.id}>
            <Task
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              onStatus={onStatus}
            />
            <Button onClick={() => onID(task.id)}>Acción</Button>
          </div>

        ) )      
      }
    </>
  )
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    onStatus: PropTypes.func.isRequired,
    onID: PropTypes.func.isRequired,
    
  
}

export default TaskList