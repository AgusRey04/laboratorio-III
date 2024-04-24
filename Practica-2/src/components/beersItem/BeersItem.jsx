import PropTypes from "prop-types";
import { Card} from "react-bootstrap";
import "./BeersItem.css"


const BeersItem = ({ beerName, beerStyle, price, available }) => {
  return (
    <Card className="mx-3" style={ {width: '10rem', margin: "10px"}}>
      <Card.Body className="card-body">
        <Card.Title>{beerName}</Card.Title>
        <p>{beerStyle}</p>
        <div>${price}</div>
        <div>{available? "disponible": "Sin stock"}</div>
      </Card.Body>
    </Card>
  );
};

BeersItem.propTypes = {
  id: PropTypes.number,
  beerName: PropTypes.string,
  beerStyle: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.bool,
};

export default BeersItem;
