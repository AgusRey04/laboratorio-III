 import {useState}from 'react'
import PropTypes from 'prop-types'
import {Card,Form,Row,Button,Col} from 'react-bootstrap'

const NewBeers = ({onBeersDataSave}) => {
  const [newBeerName,setNewBeerName] = useState('');
  const [newBeerStyle, setNewBeerStyle] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newAvailable, setNewAvailable] = useState(2);

  const handleNewBeerName = (e) => {
    setNewBeerName(e.target.value);
  };
  const handleNewBeerStyle = (e) => {
    setNewBeerStyle(e.target.value);
  };
  const handleNewPrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleNewAvailable = (e) => {

    setNewAvailable(e.target.value);
  };
  

const submitBeers = (event) =>{
  event.preventDefault();
  const beersDate = {
    beerName: newBeerName,
    beerStyle: newBeerStyle,
    price: newPrice,
    available: newAvailable==2?false:true
  };
  onBeersDataSave(beersDate);
  setNewBeerName('');
  setNewBeerStyle('');
  setNewPrice(0);
  setNewAvailable(2);
};


  return (
    <>
     <Card className="m-4 w-50" bg="success">
          <Card.Body>
             <Form className="text-white" onSubmit={submitBeers} >
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookTitle">
                    <Form.Label> Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Beer Name"
                      onChange={handleNewBeerName }
                       value={newBeerName}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookAuthor">
                    <Form.Label>Style</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Beer Style"
                     onChange={handleNewBeerStyle}
                      value={newBeerStyle}
                    />
                  </Form.Group>
                </Col>
              
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookRating">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Beer Price"
                      
                      min={0}
                      onChange={handleNewPrice}
                      value={newPrice}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookRating">
                  <Form.Label>Available</Form.Label>
                  <Form.Select aria-label="Default select example"  onChange={handleNewAvailable } value={newAvailable}>
                      <option value="1">Disponible</option>
                      <option value="2">Sin stock</option>
        
                  </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
             
          
              <Row className="justify-content-end">
                <Col md={3} className="d-flex justify-content-end">
                  <Button  type="submit" variant="primary">
                    Agregar lectura
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

    </>
  )
}

NewBeers.propTypes = {
  onBeersDataSave: PropTypes.func.isRequired,
}

export default NewBeers