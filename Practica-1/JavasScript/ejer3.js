const paises =[
    { name: "Argentina", population: 458100000},
    { name: "Brazil", population: 524884122},
    { name: "Chile", population: 233559946}
]
// ejer 3
const ordenarPaises = paises.sort((var1,var2)=>{
    return var1.population - var2.population
}).map(paise=> paise.population);
console.log(ordenarPaises);
