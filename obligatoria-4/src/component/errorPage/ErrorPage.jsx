import "./ErrorPage.css"; // Archivo CSS para estilo
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="error-container">
      <h1>⚠️ Error 404 ⚠️</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>Por favor, verifica la URL o regresa a la página de inicio.</p>
      <Button onClick={clickHandler}>REGRESAR Al INICIO</Button>
    </div>
  );
};

export default ErrorPage;
