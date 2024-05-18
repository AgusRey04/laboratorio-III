import PropTypes from 'prop-types';
import Task from '../task/Task';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const TaskList = ({ tasks, onID, onStatusChange }) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>GESTION DE TAREAS</h1>
      <Button onClick={() => navigate("/newTask")}>Agregar Tarea</Button>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onStatusChange={onStatusChange}
            onID={onID}
          />
        </div>
      ))}
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onID: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default TaskList;