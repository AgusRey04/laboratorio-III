let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
    ];
// ejer 1
const names = input.map(person=> person.name);
console.log(names)

// ejer 2
const  filtrarEdad = input.filter((edad)=>{
    return edad.age>20 && edad.age<29
})
// const paises =[
//     { name: "Argentina", population: 458100000},
//     { name: "Brazil", population: 524884122},
//     { name: "Chile", population: 233559946}
// ]
// // ejer 3
// const ordenarPaises = paises.sort((population1,population2)=>{
//     return population2-population1
// });
// console.log(ordenarPaises);

