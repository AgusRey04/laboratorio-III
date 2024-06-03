import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Task = ({ id, title, status, description, onID, onStatusChange }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/taskList/${id}`, {
      state: {
        task: {
          title,
          description,
          status,
        },
      },
    });
  };

  const handleStatus = () => {
    onStatusChange(id);
  };

  return (
    <div>
      {status ? (
        <h2>{title}</h2>
      ) : (
        <h2>
          <del>{title}</del>
        </h2>
      )}
      <Button onClick={handleStatus}>
        {status ? "Marcar como realizada" : "Marcar como pendiente"}
      </Button>
      <Button onClick={handleClick}>Más</Button>
      <Button onClick={() => onID(id)}>Eliminar</Button>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  onID: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default Task;
