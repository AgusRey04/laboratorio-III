import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './Beers.css';
import context from 'react-bootstrap/esm/AccordionContext';



const Beers = ({ id, beerName, beerStyle, price, available }) => {
    return (
        <div >
           <Card style={ {width: '15rem', margin: "10px",display: 'inline-block'}}>
            
                <div>Name: {beerName}</div>
                <div>Style: {beerStyle}</div>
                <div>Price: ${price}</div>
                <div>Available: {available? "Disponible" : "Sin stock"}</div>
    
            </Card>
        </div>
    );
};

Beers.propTypes = {
    id: PropTypes.number,
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool
};

export default Beers;
