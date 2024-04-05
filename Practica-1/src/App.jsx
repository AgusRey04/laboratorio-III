// EJERCICIO 1
import Beers from './component/beers/Beers'
import './App.css'

const beers = [
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

const beersAvailable = beers.filter((beer) => beer.available === true).map((beer)=>(<Beers key={beer.id} beerName = {beer.beerName} beerStyle ={beer.beerStyle} price = {beer.price} available= {beer.available}/>));

function App() {

  return (
    <>
      <div>
        <p>Hola</p>
  
        {
          beers.map((beer)=> (<Beers key={beer.id} beerName = {beer.beerName} beerStyle ={beer.beerStyle} price = {beer.price} available= {beer.available}/>))
        }
        <p>---------------------------------</p>
        <p>Beers Filtrada</p>
        {
          beersAvailable
        }
      </div>
    </>
  )
}

export default App
