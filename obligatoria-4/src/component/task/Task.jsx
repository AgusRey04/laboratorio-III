import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Task = ({ id, title, description, status 
 }) => {
  
    const [pending, setPending] = useState(status);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`taskList/:id${id}`, {
      state: {
        task: {
          title,
          description,
          pending,
        },
      },
    }); 
  };


  const handleStatus = () => {
    
    setPending(!pending)
  };
  return (
    <div>
      { pending?<h2>{title}</h2>:<h2><del>{title}</del></h2>}
       
      <Button onClick={handleStatus }>
            {pending?"pendiente":"realizado"}
      </Button>
      <Button onClick={handleClick}>Más</Button>
     
      
      
    </div>
  );
};
Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  status: PropTypes.bool,
  onStatus: PropTypes.func
};
export default Task;
