import PropTypes from "prop-types";
import {useState} from "react";
import BeersItem from "../beersItem/BeersItem";
import ChangeDolar from "../changeDolar/ChangeDolar";
import "./Beers.css";
import NewBeers from "../newBeers/NewBeers";
const BEERS =[
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

const Beers = () => {
 
  const [dollarValue, setDollarValue] = useState("1");
  const [beers, setBeers] = useState(BEERS);

  const handleSetDollar = (newValue) =>{
    setDollarValue(newValue);
    
  }

  const handleAddBeer = (enteredBeers) => {
    const beersData= {
      ...enteredBeers,
      id:Math.random().toString()
    };
    setBeers([...beers, beersData]);
  };



  return (
    <div className="css-beers">
      <ChangeDolar setDollarHandler={handleSetDollar} dollar={dollarValue} />
      <NewBeers  onBeersDataSave = {handleAddBeer}/>
      <div className="car-beers">
        {beers.map((beer) => (
          <BeersItem
            key={beer.id}
            beerName={beer.beerName}
            beerStyle={beer.beerStyle}
            price={beer.price * parseInt(dollarValue)}
            available={beer.available}
          />
        ))}
      </div>
    </div> 
  );
};

Beers.propTypes = {
  beers: PropTypes.array,
  dollar: PropTypes.string
 };

export default Beers;
