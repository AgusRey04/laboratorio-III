// import React from 'react'
import PropTypes from 'prop-types'
import Task from '../task/Task'

const TaskList = ({tasks}) => {
  return (
    <>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status= {task.status}
           />
        ))
      }
    
    </>
  )
}

TaskList.propTypes = {
    tasks: PropTypes.array
  
}

export default TaskList